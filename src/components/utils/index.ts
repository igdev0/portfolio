import {ProjectType} from '@/content/types';

export function filterProjectsByOwner(src: ProjectType[], owner: ProjectType['owner']) {
  return src.filter(item => item.owner === owner)??[];
}