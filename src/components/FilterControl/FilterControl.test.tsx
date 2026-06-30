import { render, screen } from '@testing-library/react';
import { FilterControl } from './FilterControl';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('FilterControl', () => {
    test('renders the filter text input', () => {
        const updateSearchTerm = vi.fn();

        render(<FilterControl updateSearchTerm={updateSearchTerm} />);

        // checks label text to test visibility
        expect(screen.getByLabelText(/filter/i)).toBeInTheDocument();

        // uses textbox aria role to define text input then checks it is visible
        const textInput = screen.getByRole('textbox');
        expect(textInput).toBeInTheDocument();
    })
})