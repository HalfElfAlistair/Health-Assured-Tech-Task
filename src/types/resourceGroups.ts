import { Category, Resource } from "./resource";

// reusable type for an object containing resources, grouped by category key. Set to partial to account for initially empty object in function, rather than setting each Category at the beginning of said function
export type ResourceGroups = Partial<Record<Category, Resource[]>>;