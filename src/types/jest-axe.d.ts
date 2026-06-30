declare module 'jest-axe';

declare namespace jest {
    interface Matchers<R> {
        toHaveNoViolations(): R;
    }
}