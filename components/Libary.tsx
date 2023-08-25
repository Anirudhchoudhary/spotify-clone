"use client"

import { BiSolidPlaylist } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal  from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
    songs: Song[];
}


const Libary: React.FC<LibraryProps> = ({
    songs
}) => {
    const authModel = useAuthModal();
    const uploadmodal = useUploadModal();
    const { user } = useUser();
    const onPlay = useOnPlay(songs);

    const onClick = () => {
        if (!user) {
            return authModel.onOpen();
        }
        // TODO: check for subscirption.
        return uploadmodal.onOpen();
    }


    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <BiSolidPlaylist size={26} className="text-neutral-400" />
                    <p className="text-neutral-400 font-medium text-md"> Your Library</p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hover:text-white
                        transition
                    "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                {songs.map((items) => (
                    <MediaItem
                        onClick={(id: string) => onPlay(id)}
                        key={items.id}
                        data={items}
                    />
                ))}
            </div>
        </div>
    )
}

export default Libary;