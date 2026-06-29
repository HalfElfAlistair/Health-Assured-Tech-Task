import { Resource } from "../types/resource"
export const sortResources = (resources: Resource[], sortBy: string) => {
    return resources.sort((a: Resource, b: Resource) => {
        return sortBy === "New" ? (
            new Date(b.date_uploaded).getTime() - new Date(a.date_uploaded).getTime()
        ) : (
            new Date(a.date_uploaded).getTime() - new Date(b.date_uploaded).getTime()
        )
    })
}