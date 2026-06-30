import { Resource } from "../types/resource"
export const sortResources = (resources: Resource[], sortBy: string) => {
    // clones resources to prevent mutation of the argument
    const clonedResources = [...resources];
    return clonedResources.sort((a: Resource, b: Resource) => {
        return sortBy === "New" ? (
            new Date(b.date_uploaded).getTime() - new Date(a.date_uploaded).getTime()
        ) : (
            new Date(a.date_uploaded).getTime() - new Date(b.date_uploaded).getTime()
        )
    })
}