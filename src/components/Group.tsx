import { Category, Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";

interface GroupProps {
    category: Category;
    resources: Resource[];
}

export const Group = ({ category, resources }: GroupProps) => {
    return (
        <section className="group">
            <h2>{category}</h2>
            <span />
            <div className="cards-container">
                {resources.map(resource => {
                    return (
                        <ResourceCard key={resource.id} resource={resource} />
                    )
                })}
            </div>
        </section>
    )
}