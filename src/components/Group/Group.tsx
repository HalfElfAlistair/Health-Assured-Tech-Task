import { Category, Resource } from "../../types/resource";
import { ResourceCard } from "../ResourceCard/ResourceCard";

interface GroupProps {
    category: Category;
    resources: Resource[];
}

export const Group = ({ category, resources }: GroupProps) => {
    return (
        <section className="group">
            <h2 data-testid="group-header">{category}</h2>
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