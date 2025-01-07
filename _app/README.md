# Block Development Examples Directory

A modern web application built with React, TypeScript, and Tailwind CSS that showcases a curated collection of WordPress block development examples. The directory helps developers find and explore practical examples for building custom blocks and extending the WordPress Block Editor.

## Features

-   🔍 Search functionality across all examples
-   🏷️ Filter by multiple tags
-   📱 Responsive design
-   🔗 URL-based filtering (shareable filtered views)
-   📅 Automatic sorting by last update date
-   📄 Pagination support
-   Built with Vite for fast development experience
-   Uses TypeScript for type safety
-   Styled with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── features/
│   │   ├── Pagination.tsx    # Handles page navigation
│   │   ├── SampleCard.tsx    # Individual example card
│   │   └── SearchBar.tsx     # Search input component
│   └── layout/
│       ├── Header.tsx        # App header with search
│       ├── Sidebar.tsx       # Tags filter panel
│       └── SampleGrid.tsx    # Grid of examples
├── data/
│   └── samples.json         # Example data
├── types/
│   └── sample.ts           # TypeScript interfaces
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## Getting Started

### Prerequisites

-   Node.js 16.x or later
-   npm 7.x or later

### Installation

-   Install dependencies:

```bash
npm install
```

-   Start the development server:

```bash
npm run dev
```

-   Open your browser and visit:

```
http://localhost:5173
```

### Production

To generate a production build we do from `/_app`

```bash
npm run build
```

To deployy the production build we do from the root of the project `/`

```bash
npm run gh:deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
