import { JSX } from "react";
import { useEnmityContext } from "@/contexts/EnmityContext";
import ChannelListTopBar from "@/components/ChannelList/TopBar/ChannelListTopBar";
import CategoryItem from "@/components/ChannelList/CategoryItem/CategoryItem";
import ChannelListBottomBar from "@/components/ChannelList/BottomBar/ChannelListBottomBar";
import CreateChannelForm from "@/components/ChannelList/CreateChannelForm/CreateChannelForm";

export default function CustomChannelList(): JSX.Element {
    const { server, channelsByCategories } = useEnmityContext();

    return (
        <div className='w-72 bg-medium-gray h-full flex flex-col items-start'>
            <ChannelListTopBar serverName={server?.name || 'Direct Messages'} />

            <div className='w-full'>
                {Array.from(channelsByCategories.keys()).map((category, index) => (
                    <CategoryItem
                        key={`${category}-${index}`}
                        category={category}
                        serverName={server?.name || 'Direct Messages'}
                        channels={channelsByCategories.get(category) || []}
                    />
                ))}
            </div>

            <CreateChannelForm />

            <ChannelListBottomBar />
        </div>
    );
}