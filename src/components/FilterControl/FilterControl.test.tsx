import { render, screen } from '@testing-library/react';
import { FilterControl } from './FilterControl';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

describe('FilterControl', () => {
    test('renders the filter text input', () => {
        const mockUpdateSearchTerm = vi.fn();

        render(<FilterControl updateSearchTerm={mockUpdateSearchTerm} />);

        // checks label text to test visibility
        expect(screen.getByLabelText(/filter/i)).toBeInTheDocument();

        // uses textbox aria role to define text input then checks it is visible
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
    })

    test('calls updateSearchTerm when text is inputted', async () => {
        const mockUpdateSearchTerm = vi.fn();
        const user = userEvent;

        render(<FilterControl updateSearchTerm={mockUpdateSearchTerm} />);

        // simulates user entering 'test' into the text input
        await user.type(screen.getByRole('textbox'), 'test')

        // checks text input value has updated to correlate with user input
        expect(screen.getByRole('textbox')).toHaveValue('test')

        // checks updater function is called with the correct value
        expect(mockUpdateSearchTerm).toHaveBeenCalledWith('test');
    })

    test('is accessible', async () => {
        const mockUpdateSearchTerm = vi.fn();
        const { container } = render(<FilterControl updateSearchTerm={mockUpdateSearchTerm} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})