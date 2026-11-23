# Ford Performance Showcase

A responsive Ford vehicle showcase built with Flask, HTML, CSS, and JavaScript. It presents 71 Ford vehicles, including classic muscle cars, modern performance models, SUVs, trucks, rally cars, concepts, and electric vehicles.

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
