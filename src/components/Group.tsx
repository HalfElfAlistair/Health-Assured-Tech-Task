import { Category, Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";
import { sortResources } from "../utils/sortResources";

interface GroupProps {
    category: Category;
    resources: Resource[];
    sortBy: string;
}

export const Group = ({ category, resources, sortBy }: GroupProps) => {
    const sortedResources = sortResources(resources, sortBy);
    return (
        <section>
            <h2>{category}</h2>
            {sortedResources.map(resource => {
                return (
                    <ResourceCard key={resource.id} resource={resource} />
                )
            })}
        </section>
    )
}