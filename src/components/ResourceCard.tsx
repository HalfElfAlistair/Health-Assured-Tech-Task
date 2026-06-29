import { Resource } from "../types/resource";

interface ResourceCardProps {
    resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
    const { id, title, thumbnail, tags, duration, description } = resource;
    return (
        <div key={id}>
            <h3>{title}</h3>
            <img src={thumbnail} alt={description} style={{ width: "300px" }} />
            <div>
                {tags.map((tag: string) => {
                    return (
                        <p key={tag}>{tag}</p>
                    )
                })}
            </div>
            <p>duration: {`${duration}`} minutes</p>
        </div>
    )
}