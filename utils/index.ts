import {getPayload} from "payload";
import {ProjectType} from '@/content/types';
import payloadConfig from '@payload-config';

export async function getLocalPayload() {
  return getPayload({
    config: payloadConfig
  });
}

export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
  return src.filter(item => item.owner === owner) ?? [];
}