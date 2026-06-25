import {ProjectType} from '@/content/types';
import {Media} from '@/payload-types';


export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
  return src.filter(item => item.owner === owner) ?? [];
}

export function getMediaUrl(props: Media) {
  return `${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${props.url}`;
}