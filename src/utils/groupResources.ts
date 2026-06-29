import { Resource } from '../types/resource';

interface ResourceCategories {
    [key: string]: Resource[];
}

export const groupResources = (resources: Resource[]) => {
    const result: ResourceCategories = {};
    resources.forEach(resource => {
        const { category } = resource;
        if (!result[category]) {
            result[category] = [];
        }
        result[category].push(resource);
    })
    return result;
}