import { useClient } from '@/hooks/useClient';
import { User } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import ServerList from '@/components/ServerList/ServerList';
import CustomChannelList from '@/components/ChannelList/CustomChannelList';
import CustomDateSeparator from '@/components/MessageList/CustomDateSeparator/CustomDateSeparator';
import CustomChannelHeader from '@/components/MessageList/CustomChannelHeader/CustomChannelHeader';
import CustomMessage from '@/components/MessageList/CustomMessage/CustomMessage';
import { customReactionOptions } from '@/components/MessageList/CustomReactions/CustomReactionsSelector';
import MessageComposer from '@/components/MessageList/MessageComposer/MessageComposer';

export default function MyChat({
    apiKey,
    user,
    token,
}: {
    apiKey: string;
    user: User;
    token: string;
}) {
    const chatClient = useClient({
        apiKey,
        user,
        tokenOrProvider: token,
    });

    if (!chatClient) {
        return <div>Error, please try again later.</div>;
    }

    return (
        <Chat client={chatClient} theme='str-chat__theme-light'>
            <section className='flex h-screen w-screen layout'>
                <ServerList />
                <ChannelList List={CustomChannelList}/>
                <Channel
                Message={CustomMessage}
                Input={MessageComposer}
                DateSeparator={CustomDateSeparator}
                reactionOptions={customReactionOptions}
                HeaderComponent={CustomChannelHeader}
                >
                    <Window>
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </section>
        </Chat>
    );
}