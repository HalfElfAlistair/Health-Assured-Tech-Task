import { render, screen } from '@testing-library/react';
import { FilterControl } from './FilterControl';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

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

        await user.type(screen.getByRole('textbox'), 'test')

        expect(screen.getByRole('textbox')).toHaveValue('test')

        expect(mockUpdateSearchTerm).toHaveBeenCalledWith('test');
    })
})