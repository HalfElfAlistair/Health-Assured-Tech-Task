# Health Assured Tech Task — Frontend Application

A small, focused React + TypeScript application built for the Health Assured technical assessment.

The project displays a list of wellbeing resources, with support for filtering, sorting, and automatic grouping.

It includes a full Playwright test suite covering all meaningful user interactions.

Task instructions can be found at the bottom of Readme

## Features

### Filtering
Users can filter resources by title using a text input.

Filtering is fully reactive and updates the list as the user types.

### Sorting
Resources can be sorted by upload date (newest → oldest or oldest → newest).

Sorting is implemented client‑side and updates instantly.

### Automatic Grouping
Resources are automatically grouped by category.

Each group is rendered with a header and its associated items beneath it.

### Accessible Keyboard Navigation
The interface supports keyboard navigation:

Tab → Sort control

Tab → Filter control

(No other interactive elements, resource cards are informational only)

This behaviour is tested across Chromium, Firefox, and WebKit.

## Tech Stack

- React (functional components + hooks)

- TypeScript

- Vite (fast dev server + build tooling)

- Playwright (cross‑browser E2E testing)

- ESLint + Prettier (consistent formatting and linting)

## Testing

The project uses React Testing Library, Vitest, and Playwright to test the following:

1. Page Load
Ensures the app renders correctly and resources are visible.

2. Filtering
Typing into the filter input updates the list and hides non‑matching items.

3. Sorting
Sorting by date correctly reorders the resource cards.

4. Grouping
Resources are grouped automatically by category, with each group containing at least one item.

5. Keyboard Navigation
Cross‑browser‑safe test verifying tab order:

Sort control

Filter control

Resource cards are not tabbable because they contain no interactive elements — this is intentional and accessibility‑correct.

All tests run in:

Chromium

Firefox

WebKit

## Running the Project

### Install dependencies:

npm install

### Start the dev server:

npm run dev

### Run the test suite:

npm run test

### Run tests in headed mode:

npm run test:ui

## Notes

Grouping is automatic — there is no grouping control.

Resource cards are intentionally non‑interactive and therefore not part of the tab order.

The Playwright suite includes WebKit‑specific handling to ensure reliable keyboard navigation tests.

As the instructions below indicate, the task requires at least two of the following features:

- When a user clicks on a resource, display all the resource data including the description and date uploaded
- Sort the cards by category/date
- Filter by title/tags

I went with a date sort, and a title filter. Naturally with more time I'd have added a modal to display the full resource details, category sort and tags filter. Tag filtering, in particular, would have been interesting to work on as I'd have liked to set it to display the relevant tag as one of the three available (pushing it to the front of the list).

While I've employed Playwright end-to-end testing here, I had a nightmare trying to get it hooked into my CI process (eventually knocking that on the head). I'd like to take another look at troubleshooting that at some point.

## Task Instructions

HA | Wisdom Wellbeing is focused on offering tools and services to our clients to support their physical and mental
wellbeing with one of our features being the Resource Centre. For this task, we would like you to create a single page
application that displays different resources grouped by their category.

Resources should be grouped by their category on the page on first load. Each resource can only belong to one of the
following categories

- Podcasts
- Articles
- Newsletters
- Recipes
- Fitness
- Meditation

### Functionality

Display the grouped resources, each with

- Title
- Thumbnail Image
- Tags: no more than 3
- Read/watch time in minutes

Please add at least two of the following features:

- When a user clicks on a resource, display all the resource data including the description and date uploaded
- Sort the cards by category/date
- Filter by title/tags

### The Data

For this task, you are not required to integrate with an external API. Instead, please use mock data to simulate the
dataset. An example of a JSON you can use is at the end of this document.
