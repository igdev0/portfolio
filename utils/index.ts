import {ProjectType} from '@/content/types';

export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
    return src.filter(item => item.owner === owner) ?? [];
}

export function getMediaUrl(props: { url: string }) {
    return `${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${props.url}`;
}