import { render } from '@testing-library/react';
import App from './App.tsx'
import { describe, test, expect } from 'vitest';
import { axe } from 'jest-axe';

describe('App', () => {
    test('is accessible', async () => {
        const { container } = render(<App />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
})