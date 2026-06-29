// Category Enum to ensure consistent values when I add grouping, filtering, and UI components
export enum Category {
    Podcasts = "Podcasts",
    Articles = "Articles",
    Newsletters = "Newsletters",
    Recipes = "Recipes",
    Fitness = "Fitness",
    Meditation = "Meditation"
};

export interface Resource {
    id: string;
    category: Category;
    title: string;
    thumbnail: string;
    tags: string[],
    duration: Number,
    description: string;
    date_uploaded: string;
}