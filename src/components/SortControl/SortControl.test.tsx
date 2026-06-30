import { render, screen } from '@testing-library/react';
import { SortControl } from './SortControl';
import { describe, test, expect, vi } from 'vitest';

describe('SortControl', () => {
    test('renders the sort select with options', () => {
        const mockUpdateSort = vi.fn();

        render(<SortControl updateSort={mockUpdateSort} />);

        // checks label text to test visibility
        expect(screen.getByLabelText(/sort/i)).toBeInTheDocument();

        // uses combobox aria role to define select then checks it is visible
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();

        // uses option aria role and checks the visible text on each for a match
        expect(screen.getByRole('option', { name: /new/i })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: /old/i })).toBeInTheDocument();
    })
})



