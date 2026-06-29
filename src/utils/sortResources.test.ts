import { describe, expect, test } from 'vitest';
import { sortResources } from './sortResources';

describe("sortResources", () => {
    test("returns empty array if passed an empty array", () => {
        const sortedResources = sortResources([]);
        expect(sortedResources).toEqual([]);
    })
})