# Ford Performance Showcase

[![Live Demo](https://img.shields.io/badge/Live-Demo-2563eb)](https://mycars-five.vercel.app)
[![Python](https://img.shields.io/badge/Python-3.12-3776ab)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-000000)](https://flask.palletsprojects.com/)

A responsive Ford vehicle showcase built with Flask, HTML, CSS, and JavaScript. It presents 71 Ford vehicles, including classic muscle cars, modern performance models, SUVs, trucks, rally cars, concepts, and electric vehicles.

**Live website:** https://mycars-five.vercel.app

## Overview

Ford Performance Showcase is a curated web catalog for exploring Ford's heritage and modern engineering. The experience combines editorial-style presentation with interactive browsing tools, including filtering, search, favorites, comparisons, generation grouping, and vehicle detail modals.

## Technology Stack

- Python and Flask for routes and server-side templates
- Jinja2 and HTML5 for page structure
- CSS custom properties and responsive layouts
- Vanilla JavaScript for catalog and modal interactions
- Vercel for serverless deployment

## Features

- Immersive Ford performance landing page
- 71-car collection from 1965 to 2028
- Mustang models organized by generation
- Search, sorting, category filters, and favorites
- Grid and list catalog views
- Detailed vehicle modals with specifications and descriptions
- Side-by-side vehicle comparison
- Light and dark themes
- Responsive desktop, tablet, and mobile layouts

## Pages

| Route | Description |
| --- | --- |
| `/` | Ford heritage landing page |
| `/dashboard` | Searchable vehicle collection |
| `/404` or unknown route | Branded not-found page |

## Run Locally

### Requirements

- Python 3.10 or newer
- Flask

### Start the application

```bash
pip install -r requirements.txt
python Main.py
```

Open `http://127.0.0.1:5000` in your browser.

## Project Structure

```text
.
├── Main.py                 # Flask application
├── api/
│   └── index.py            # Vercel serverless entry point
├── templates/
│   ├── home.html           # Landing page
│   ├── dashboard.html      # Vehicle collection
│   └── 404.html            # Error page
├── static/
│   ├── css/                # Site and dashboard styles
│   ├── js/site.js          # Filtering, favorites, modal, and effects
│   ├── images/mustang/     # Local Mustang image collection
│   └── videos/             # Hero and introduction videos
├── requirements.txt
└── vercel.json
```

## Deployment

The project includes a Vercel serverless configuration for the Flask application. Deploy by connecting the GitHub repository to Vercel or by running:

```bash
vercel --prod
```

## Data and Sources

Vehicle specifications and source links are stored in `static/js/site.js`. Some model entries use locally available placeholder specification values and provide source links for further reference.

## Collection Coverage

The catalog includes recognizable Ford icons across the following eras and categories:

- 1965 to 2028 Mustang models
- Classic American and Australian performance vehicles
- Modern performance cars and hot hatches
- Trucks and off-road SUVs
- Rally and motorsport vehicles
- Electric and hybrid performance
- Concept and showcase models

## Accessibility

- Semantic page landmarks and navigation labels
- Keyboard focus indicators
- Modal dialog behavior with close controls
- Descriptive image alternatives
- Reduced-motion support
- Touch-specific behavior that avoids sticky hover effects

## Verification

Before deploying changes, verify the main routes:

```bash
python -c "from Main import app; c=app.test_client(); print(c.get('/').status_code, c.get('/dashboard').status_code)"
```

## Search and Filtering

The dashboard search matches model names, categories, and Mustang generations. Category filters are combined with search text and the favorites-only control.

## Catalog Sorting

The collection can be ordered by catalog position, name, newest model year, oldest model year, horsepower, or recorded 0-60 mph time.

## Favorites

Favorite selections are stored in the browser with local storage. The Favorites view hides all models that are not in the saved list.

## Vehicle Comparison

Users can select up to three vehicles and open a comparison modal that combines engine, power, year, acceleration, and feature information.

## Vehicle Detail Modal

Selecting a vehicle opens a focused detail view with an image, performance specifications, description, highlights, and a reference source link.

## Mustang Generation View

When Mustang is selected, models are organized into generation sections for the first, third, fourth, fifth, sixth, and seventh generations.

## Theme Support

The interface follows the saved theme preference when available and otherwise uses the operating system color scheme. Theme changes are persisted locally.

## Responsive Layout

The sidebar becomes a horizontal category selector on smaller screens. Catalog cards switch from grid layouts to a reduced-width mobile layout.

## Image Handling

Catalog cards use lazy-loaded images and fall back to a local Mustang placeholder when an external or local image cannot be loaded.

## Hero Media

The landing page includes an autoplaying hero video and a short introduction sequence that can be skipped or muted by the visitor.
