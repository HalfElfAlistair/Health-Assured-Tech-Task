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

        const img = screen.getByRole('presentation');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockResource.thumbnail);
        expect(img).toHaveAttribute('alt', "");
    })

    test('renders the title', () => {
        render(<ResourceCard resource={mockResource} />);
        expect(screen.getByRole('heading', { name: mockResource.title })).toBeInTheDocument();
    })

    test('renders the duration', () => {
        render(<ResourceCard resource={mockResource} />);
        expect(screen.getByText(`${mockResource.duration} minutes`)).toBeInTheDocument();
    })

    test('renders tags', () => {
        render(<ResourceCard resource={mockResource} />);
        mockResource.tags.forEach(tag => {
            expect(screen.getByText(tag)).toBeInTheDocument();
        });
    })

    test('renders no more than three tags', () => {
        const mockResource: Resource = {
            "id": "001",
            "category": Category.Podcasts,
            "title": "Mindful Moments",
            "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
            "tags": [
                "wellbeing",
                "mindfulness",
                "relaxation",
                "another tag",
                "and another!",
                "too many tags, too many many tags"
            ],
            "duration": 25,
            "description": "A calming podcast focused on mindfulness techniques for daily life.",
            "date_uploaded": "2025-07-10"
        }
        render(<ResourceCard resource={mockResource} />);

        const tags = screen.getAllByTestId('tag');
        expect(tags).toHaveLength(3);
    })
})