'use client';

import { useCallback, useEffect, useState } from "react";
import { User } from "stream-chat";
import { LoadingIndicator } from "stream-chat-react";
import { useUser } from "@clerk/clerk-react";
import MyChat from '@/components/MyChat';

type HomeState = {
  apiKey: string;
  user: User;
  token: string;
};

export default function Home() {
  const [homeState, setHomeState] = useState<HomeState | undefined>();

  const { user: clerkUser } = useUser();

  const registerUser = useCallback(async () => {
    const userId = clerkUser?.id;
    const mail = clerkUser?.primaryEmailAddress?.emailAddress;

    console.log('Registering User - Details:', {
      userId,
      mail,
      publicMetadata: clerkUser?.publicMetadata
    });

    if (userId && mail) {
      try {
        const response = await fetch('/api/register-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, email: mail }),
        });

        const responseBody = await response.json();
        console.log('Register User Response:', responseBody);
        return responseBody;
      } catch (error) {
        console.error('Error in registerUser:', error);
      }
    }
  }, [clerkUser]);

  async function getUserToken(userId: string, userName: string) {
    console.log('Getting User Token - Details:', { userId, userName });

    try {
      const response = await fetch('/api/token', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ userId: userId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseBody = await response.json();
      const token = responseBody.token;

      console.log('Token Response:', { token, responseBody });

      if (!token) {
        console.error('No token found');
        return;
      }

      const user: User = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
      };

      const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
      
      console.log('API Key:', { apiKey });

      if (apiKey) {
        setHomeState({ 
          apiKey, 
          user, 
          token 
        });
        console.log('HomeState set successfully');
      } else {
        console.error('No API key found');
      }
    } catch (error) {
      console.error('Error in getUserToken:', error);
    }
  }

  useEffect(() => {
    console.log('Effect triggered - Clerk User:', clerkUser);

    if (
      clerkUser?.id &&
      clerkUser?.primaryEmailAddress?.emailAddress &&
      !clerkUser?.publicMetadata.streamRegistered
    ) {
      registerUser().then((result) => {
        getUserToken(
          clerkUser.id,
          clerkUser?.primaryEmailAddress?.emailAddress || 'Unknown'
        );
      });
    } else {
      if (clerkUser?.id) {
        getUserToken(
          clerkUser?.id || 'Unknown',
          clerkUser?.primaryEmailAddress?.emailAddress || 'Unknown'
        );
      }
    }
  }, [registerUser, clerkUser]);

  if (!homeState) {
    return <LoadingIndicator />;
  }

  return <MyChat {...homeState} />;
}