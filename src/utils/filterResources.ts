import { Resource } from "../types/resource";
export const filterResources = (resources: Resource[], searchTerm: string) => {
    return resources.filter(resource => {
        return resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
}