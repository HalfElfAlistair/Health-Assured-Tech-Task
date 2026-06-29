import { Category, Resource } from "../types/resource";

interface GroupProps {
    category: Category;
    resources: Resource[];
    sortBy: string;
}

export const Group = ({ category, resources, sortBy }: GroupProps) => {
    return (
        <section>
            <h2>{category}</h2>
        </section>
    )
}