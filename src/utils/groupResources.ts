import { Resource } from '../types/resource';
import { ResourceGroups } from '../types/resourceGroups';

export const groupResources = (resources: Resource[]): ResourceGroups => {
    // uses reduce to loop through resources and accumulate groupedResources by category
    return resources.reduce<ResourceGroups>((groupedResources, resource) => {
        const category = resource.category;
        // if category is assigned to groupedResources, push the resource, if not set as empty array first then push resource
        (groupedResources[category] ??= []).push(resource);
        return groupedResources;
    }, {});
}