import { render, screen } from '@testing-library/react';
import { ResourceCard } from './ResourceCard';
import { describe, test, expect } from 'vitest';
import { Category, Resource } from '../../types/resource';

describe('ResourceCard', () => {
    const mockResource: Resource = {
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

    test('renders the image with appropriate attributes', () => {
        render(<ResourceCard resource={mockResource} />);

        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockResource.thumbnail);
        expect(img).toHaveAttribute('alt', "");
    })
})