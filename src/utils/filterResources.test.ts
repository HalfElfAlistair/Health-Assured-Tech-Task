import { describe, expect, test } from 'vitest';
import { filterResources } from './filterResources';
import { Category, Resource } from '../types/resource';

describe("filterResources", () => {

    const resources: Resource[] = [
        {
            "id": "001",
            "category": Category.Podcasts,
            "title": "Podcast A",
            "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
            "tags": ["wellbeing", "mindfulness", "relaxation"],
            "duration": 25,
            "description": "A calming podcast focused on mindfulness techniques for daily life.",
            "date_uploaded": "2025-07-10"
        },
        {
            "id": "002",
            "category": Category.Podcasts,
            "title": "Article A",
            "thumbnail": "https://www.datocms-assets.com/93767/1751891809-photo.jpg",
            "tags": ["wellbeing", "sleep", "science"],
            "duration": 8,
            "description": "Explore the latest research on how sleep affects mental and physical health.",
            "date_uploaded": "2025-06-22"
        },
        {
            "id": "003",
            "category": Category.Podcasts,
            "title": "Podcast B",
            "thumbnail": "https://www.datocms-assets.com/93767/1753971221-photo.jpg",
            "tags": ["community", "tips", "mindfulness"],
            "duration": 5,
            "description": "Your weekly dose of wellness tips and updates from our experts.",
            "date_uploaded": "2025-08-01"
        },
    ];

    const searchTerm = "Podcast";

    test("returns empty array if passed an empty array", () => {
        const filteredResources = filterResources([], searchTerm);
        expect(filteredResources).toEqual([]);
    })

    test("returns array with only resources that have a title which includes the provided search term", () => {
        const filteredResources = filterResources(resources, searchTerm);
        expect(filteredResources.map(r => r.id)).toEqual([
            "001",
            "003"
        ]);
    })

    test("returns array with no filtered out resources if search term is empty string", () => {
        const filteredResources = filterResources(resources, "");
        expect(filteredResources.map(r => r.id)).toEqual([
            "001",
            "002",
            "003"
        ]);
    })

    test("returns matching resource titles that ignore casing differences", () => {
        const filteredResources = filterResources(resources, "podcast");
        expect(filteredResources.map(r => r.id)).toEqual([
            "001",
            "003"
        ]);
    })
})