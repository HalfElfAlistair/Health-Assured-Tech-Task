import { describe, expect, test } from 'vitest';
import { Category, Resource } from '../types/resource';
import { groupResources } from './groupResources';

describe("groupResources", () => {
    test("groups resources by category", () => {
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
                "category": Category.Articles,
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

        const groupedResources = groupResources(resources);

        expect(groupedResources).toEqual({
            [Category.Podcasts]: [
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
                    "id": "003",
                    "category": Category.Podcasts,
                    "title": "Podcast B",
                    "thumbnail": "https://www.datocms-assets.com/93767/1753971221-photo.jpg",
                    "tags": ["community", "tips", "mindfulness"],
                    "duration": 5,
                    "description": "Your weekly dose of wellness tips and updates from our experts.",
                    "date_uploaded": "2025-08-01"
                }
            ],
            [Category.Articles]: [
                {
                    "id": "002",
                    "category": Category.Articles,
                    "title": "Article A",
                    "thumbnail": "https://www.datocms-assets.com/93767/1751891809-photo.jpg",
                    "tags": ["wellbeing", "sleep", "science"],
                    "duration": 8,
                    "description": "Explore the latest research on how sleep affects mental and physical health.",
                    "date_uploaded": "2025-06-22"
                }
            ],
        });
    })

    test("returns empty object if passed an empty array", () => {
        const groupedResources = groupResources([]);
        expect(groupedResources).toEqual({});
    })
})