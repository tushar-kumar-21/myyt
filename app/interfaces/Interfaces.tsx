export interface CategoryItem {
    label: string;
    icon: JSX.Element;
    id: number;
    path?:string;
}

export interface VideoLists {
    thumbnail: string;
    duration: string;
    channelImage: string;
    title: string;
    channel: string;
    views: string;
}

export interface VideoFile {
    id: number;
    width: number;
    height: number;
    duration: number;
    avg_color: string | null;
    full_res: string | null;
    image: string;
    tags: string[];
    url: string;
    user: {
        id: number;
        name: string;
        url: string;
    };
    video_files: {
        file_type: string;
        fps: number;
        height: number;
        id: number;
        link: string;
        quality: string;
        width: number;
    }[];
    video_pictures: string[]
}

export interface VideoPicture {
}

export interface ShortVideo {
    avg_color: string | null;
    duration: number;
    full_res: string | null;
    height: number;
    id: number;
    image: string;
    tags: string[];
    url: string;
    user: {
        id: number;
        name: string;
        url: string;
    };
    video_files: VideoFile[];
    video_pictures: VideoPicture[];
    width: number;
}