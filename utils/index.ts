import {getPayload} from "payload";
import {ProjectType} from '@/content/types';
import payloadConfig from '@payload-config';
import {Media} from '@/remote/client/gql-generated';

export async function getLocalPayload() {
  return getPayload({
    config: payloadConfig
  });
}

export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
  return src.filter(item => item.owner === owner) ?? [];
}

export function getMediaUrl(props: Media) {
  return `${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${props.url}`
}