import { Resource } from "../../types/resource";

interface ResourceCardProps {
    resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
    const { id, title, thumbnail, tags, duration, category, date_uploaded } = resource;
    return (
        <div key={id} className="resource-card" data-testid="resource-card" data-group={category}>
            <img src={thumbnail} alt="" />
            <div className="resource-card-content">
                <h3 data-testid="resource-title">{title}</h3>
                <p data-testid="date"><strong>Upload Date:</strong> {date_uploaded}</p>
                <div className="tags">
                    {tags.map((tag: string, i: number) => {
                        return i < 3 && (
                            <p key={tag} className="tag" data-testid="tag">{tag}</p>
                        )
                    })}
                </div>
                <p><strong>Duration:</strong> {`${duration}`} minutes</p>
            </div>
        </div>
    )
}