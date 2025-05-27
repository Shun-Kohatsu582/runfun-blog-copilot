# RunFun Blog

A blog about running and fun activities built with [Astro](https://astro.build).

## Features

- Markdown content management
- Responsive design
- Fast static site generation
- Simple and clean user interface

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shun-Kohatsu582/runfun-blog-copilot.git
cd runfun-blog-copilot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

```
/
├── public/             # Static assets
│   ├── images/         # Blog post images
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   └── pages/          # Site pages and blog posts
│       ├── blog/       # Blog posts (Markdown files)
│       ├── about.astro # About page
│       └── index.astro # Home page
└── astro.config.mjs    # Astro configuration
```

## Adding Blog Posts

1. Create a new Markdown file in the `src/pages/blog/` directory
2. Add the following frontmatter at the top of the file:

```md
---
layout: ../../layouts/BlogPostLayout.astro
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 'YYYY-MM-DD'
heroImage: '/images/your-image.jpg' # Optional
---

Your content here...
```

3. Add any images referenced in your posts to the `public/images/` directory

## Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed to your preferred hosting provider.

## License

This project is licensed under the MIT License.
