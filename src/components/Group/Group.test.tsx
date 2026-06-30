import { render, screen } from '@testing-library/react';
import { Group } from './Group';
import { describe, test, expect } from 'vitest';
import { Category, Resource } from '../../types/resource';
import { axe } from 'jest-axe';

describe('Group', () => {
    const mockCategory = Category.Podcasts;

    test('renders the category heading', () => {
        const mockResources: Resource[] = [
            {
                "id": "001",
                "category": Category.Podcasts,
                "title": "Mindful Moments",
                "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
                "tags": [
                    "wellbeing",
                    "mindfulness",
                    "relaxation"
                ],
                "duration": 25,
                "description": "A calming podcast focused on mindfulness techniques for daily life.",
                "date_uploaded": "2025-07-10"
            }
        ]

        render(<Group category={mockCategory} resources={mockResources} />);
        // checks for a match in rendered heading text
        expect(screen.getByRole('heading', { name: /podcast/i })).toBeInTheDocument();
    })

    test('renders the category heading', () => {
        const mockResources: Resource[] = [
            {
                "id": "001",
                "category": Category.Podcasts,
                "title": "Mindful Moments",
                "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
                "tags": [
                    "wellbeing",
                    "mindfulness",
                    "relaxation"
                ],
                "duration": 25,
                "description": "A calming podcast focused on mindfulness techniques for daily life.",
                "date_uploaded": "2025-07-10"
            },
            {
                "id": "002",
                "category": Category.Podcasts,
                "title": "Mindful Moments",
                "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
                "tags": [
                    "wellbeing",
                    "mindfulness",
                    "relaxation"
                ],
                "duration": 25,
                "description": "A calming podcast focused on mindfulness techniques for daily life.",
                "date_uploaded": "2025-07-10"
            },
            {
                "id": "003",
                "category": Category.Podcasts,
                "title": "Mindful Moments",
                "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
                "tags": [
                    "wellbeing",
                    "mindfulness",
                    "relaxation"
                ],
                "duration": 25,
                "description": "A calming podcast focused on mindfulness techniques for daily life.",
                "date_uploaded": "2025-07-10"
            }
        ]

        render(<Group category={mockCategory} resources={mockResources} />);

        // gets resource cards using test id, then check the number of them is correct
        const resourceCards = screen.getAllByTestId('resource-card');
        expect(resourceCards).toHaveLength(3);
    })

    test('is accessible', async () => {
        const mockResources: Resource[] = [
            {
                "id": "001",
                "category": Category.Podcasts,
                "title": "Mindful Moments",
                "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
                "tags": [
                    "wellbeing",
                    "mindfulness",
                    "relaxation"
                ],
                "duration": 25,
                "description": "A calming podcast focused on mindfulness techniques for daily life.",
                "date_uploaded": "2025-07-10"
            }
        ]
        const { container } = render(<Group category={mockCategory} resources={mockResources} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})