import { Resource } from "../types/resource"
export const sortResources = (resources: Resource[]) => {
    return resources.sort((a: Resource, b: Resource) => {
        return new Date(b.date_uploaded).getTime() - new Date(a.date_uploaded).getTime();
    })
}