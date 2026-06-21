import {getPayload} from "payload";
import {ProjectType} from '@/content/types';
import payloadConfig from '@payload-config';
import {Media, Preview} from '@/payload-types';

export async function getLocalPayload() {
  return getPayload({
    config: payloadConfig
  });
}

export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
  return src.filter(item => item.owner === owner) ?? [];
}

export function getMediaUrl(props: Preview) {
  if(!props.image) {
    throw new Error(`Preview image is not defined for media id: ${props.id}`);
  }
  return `${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${(props.image as Media).url}`
}