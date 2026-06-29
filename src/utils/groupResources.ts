import { Resource, Category } from '../types/resource';
import { ResourceGroups } from '../types/resourceGroups';

export const groupResources = (resources: Resource[]) => {
    const result: ResourceGroups = {};
    resources.forEach(resource => {
        const category: Category = resource.category;
        if (!result[category]) {
            result[category] = [];
        }
        result[category].push(resource);
    })
    return result;
}