import { render, screen } from '@testing-library/react';
import { SortControl } from './SortControl';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

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

    test('calls updateSort when a new option is selected', async () => {
        const mockUpdateSort = vi.fn();
        const user = userEvent;

        render(<SortControl updateSort={mockUpdateSort} />);

        // simulates user selecting the sort by oldest first option
        await user.selectOptions(screen.getByRole('combobox'), 'Old');

        // checks updater function is called with the correct value
        expect(mockUpdateSort).toHaveBeenCalledWith('Old');
    });

    test('is accessible', async () => {
        const mockUpdateSort = vi.fn();
        const { container } = render(<SortControl updateSort={mockUpdateSort} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})



