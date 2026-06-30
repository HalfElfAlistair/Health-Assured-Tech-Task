import { render, screen } from '@testing-library/react';
import { Group } from './Group';
import { describe, test, expect } from 'vitest';
import { Category, Resource } from '../../types/resource';

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
})