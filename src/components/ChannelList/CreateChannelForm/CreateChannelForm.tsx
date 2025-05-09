import { JSX } from "react";
import { UserObject } from '@/models/UserObject';
import { useEnmityContext } from '@/contexts/EnmityContext';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import Link from 'next/link';
import { CloseIcon } from '@/Icons';
import UserRow from '@/UserRow';
//import { useStreamVideoClient } from '@stream-io/video-react-sdk';

type FormState = {
    channelType: 'text' | 'voice';
    channelName: string;
    category: string;
    users: UserObject[];
};

export default function CreateChannelForm(): JSX.Element {
    const params = useSearchParams();
    const showCreateChannelForm = params.get('createChannel');
    const category = params.get('category');

    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();

    const { client } = useChatContext();
    //const videoClient = useStreamVideoClient();
    const { createChannel } = useEnmityContext();
    const initialState: FormState = {
        channelType: 'text',
        channelName: '',
        category: category ?? '',
        users: [],
    };
    const [formData, setFormData] = useState<FormState>(initialState);
    const [users, setUsers] = useState<UserObject[]>([]);

    const loadUsers = useCallback(async () => {
        const response = await client.queryUsers({});
        const users: UserObject[] = response.users
            .filter((user) => user.role !== 'admin')
            .map((user) => {
                return {
                    id: user.id,
                    name: user.name ?? user.id,
                    image: user.image as string,
                    online: user.online,
                    lastOnline: user.last_active,
                };
            });
        if (users) setUsers(users);
    }, [client]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    useEffect(() => {
        const category = params.get('category');
        const isVoice = params.get('isVoice');
        setFormData({
            channelType: isVoice ? 'voice' : 'text',
            channelName: '',
            category: category ?? '',
            users: [],
        });
    }, [setFormData, params]);

    useEffect(() => {
        if (showCreateChannelForm && dialogRef.current) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showCreateChannelForm]);

    return (
        <dialog className='absolute z-10 space-y-2 rounded-xl' ref={dialogRef}>
            <div className='w-full flex items-center justify-between py-8 px-6'>
                <h2 className='text-3xl font-semibold text-gray-600'>Create Channel</h2>
                <Link href='/chat-app'>
                    <CloseIcon className='w-10 h-10 text-gray-400' />
                </Link>
            </div>
            <form method='dialog' className='flex flex-col space-y-4 px-6'>
                <label className='labelTitle' htmlFor='channelName'>
                    Channel Name
                </label>
                <div className='flex items-center bg-gray-100'>
                    <span className='text-2xl p-2 text-gray-500'>#</span>
                    <input
                        type='text'
                        id='channelName'
                        name='channelName'
                        value={formData.channelName}
                        onChange={(e) =>
                            setFormData({ ...formData, channelName: e.target.value })
                        }
                    />
                </div>
                <label
                    className='labelTitle flex items-center justify-between'
                    htmlFor='category'
                >
                    Category
                </label>
                <div className='flex items-center bg-gray-100'>
                    <span className='text-2xl p-2 text-gray-500'>#</span>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({ ...formData, category: e.target.value })
                        }
                    />
                </div>
                <h2 className='mb-2 labelTitle'>Add Users</h2>
                <div className='max-h-64 overflow-y-scroll'>
                    {users.map((user) => (
                        <UserRow user={user} userChanged={userChanged} key={user.id} />
                    ))}
                </div>
            </form>
            <div className='flex space-x-6 items-center justify-end p-6 bg-gray-200'>
                <Link href={'/chat-app'} className='font-semibold text-gray-500'>
                    Cancel
                </Link>
                <button
                    type='submit'
                    disabled={buttonDisabled()}
                    className={`bg-discord rounded py-2 px-4 text-white font-bold uppercase ${buttonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    onClick={createClicked}
                >
                    Create Channel
                </button>
            </div>
        </dialog>
    );

    function buttonDisabled(): boolean {
        return (
            !formData.channelName || !formData.category || formData.users.length <= 1
        );
    }


    function userChanged(user: UserObject, checked: boolean) {
        if (checked) {
            setFormData({
                ...formData,
                users: [...formData.users, user],
            });
        } else {
            setFormData({
                ...formData,
                users: formData.users.filter((thisUser) => thisUser.id !== user.id),
            });
        }
    }

    async function createClicked() {
        try {
            await createChannel(
                client,
                formData.channelName,
                formData.category,
                formData.users.map((user) => user.id)
            );

            // Reset the form after successful creation
            setFormData(initialState);

            // Use router.replace('/chat-app') instead of '/' to stay on the chat page
            router.replace('/chat-app');
        } catch (error) {
            console.error("Failed to create channel:", error);
        }
    }

}
