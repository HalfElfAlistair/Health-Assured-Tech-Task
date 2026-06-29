import { Category, Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";

interface GroupProps {
    category: Category;
    resources: Resource[];
    sortBy: string;
}

export const Group = ({ category, resources, sortBy }: GroupProps) => {
    return (
        <section>
            <h2>{category}</h2>
            {resources.map(resource => {
                return (
                    <ResourceCard key={resource.id} resource={resource} />
                )
            })}
        </section>
    )
}