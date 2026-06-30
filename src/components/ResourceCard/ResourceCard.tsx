import { Resource } from "../../types/resource";

interface ResourceCardProps {
    resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
    const { id, title, thumbnail, tags, duration } = resource;
    return (
        <div key={id} className="resource-card" data-testid="resource-card">
            <img src={thumbnail} alt="" />
            <div className="resource-card-content">
                <h3>{title}</h3>
                <div className="tags">
                    {tags.map((tag: string) => {
                        return (
                            <p key={tag} className="tag">{tag}</p>
                        )
                    })}
                </div>
                <p><strong>Duration:</strong> {`${duration}`} minutes</p>
            </div>
        </div>
    )
}