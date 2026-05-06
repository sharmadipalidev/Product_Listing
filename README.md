# Product Listing App

A simple React + Vite product listing project that fetches random products from the FreeAPI public endpoint and displays them in a responsive card grid.

## Overview

This project is a frontend practice app built with React. When the page loads, it sends multiple requests to the FreeAPI random product endpoint, collects the results, and renders them as product cards with:

- Product image
- Product title
- Product price

The app also includes a `Next Page` button. In the current implementation, that button does not move through a true paginated API. Instead, it triggers a fresh round of random product requests and replaces the existing items with a new set.

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS
- ESLint

## Features

- Fetches 12 random products from the API
- Displays products in a clean responsive grid
- Shows product thumbnail, title, and price
- Handles API failures with a basic error message
- Uses a simple button to refresh the listing

## API Used

Endpoint used in the app:

```txt
https://api.freeapi.app/api/v1/public/randomproducts/product/random
```

Each request returns a single random product. To show multiple items, the app makes 12 requests in parallel using `Promise.all()`.

## How It Works

The main logic lives in [src/App.jsx](/C:/WebDev%20Cohort26/FreeAPI/Product_Listing/src/App.jsx).

### State used

- `products`: stores the fetched product list
- `page`: used only to trigger re-fetching when the button is clicked
- `error`: stores the error message if a request fails

### Fetch flow

1. The component loads.
2. `useEffect()` runs because the component mounted.
3. `getProductListing()` creates 12 fetch requests.
4. `Promise.all()` waits for all product responses.
5. The results are stored in `products`.
6. React re-renders the UI with the new cards.

When `Next Page` is clicked, the `page` state increases by 1, which triggers `useEffect()` again and fetches a new set of random products.

## Project Structure

```txt
Product_Listing/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- App.css
|   |-- App.jsx
|   `-- main.jsx
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
`-- vite.config.js
```

## Installation

Make sure you have Node.js installed, then run:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Vite will print a local development URL, usually:

```txt
http://localhost:5173
```

## Available Scripts

### `npm run dev`

Starts the Vite development server.

### `npm run build`

Builds the app for production into the `dist` folder.

### `npm run preview`

Previews the production build locally.

### `npm run lint`

Runs ESLint on the project files.

## Styling

The styling lives in [src/App.css](/C:/WebDev%20Cohort26/FreeAPI/Product_Listing/src/App.css).

The UI includes:

- A centered container layout
- Soft gradient page background
- Responsive product grid
- Card hover effect
- Mobile-friendly breakpoints

## Current Limitations

- The app is not using real pagination from the backend.
- Clicking `Next Page` only refreshes the products with another random set.
- There is no loading state while products are being fetched.
- If one request fails, the whole batch can fail because `Promise.all()` is used.
- Prices are displayed with the rupee symbol regardless of the API product currency.

## Possible Improvements

- Add a loading spinner or skeleton cards
- Replace random fetching with a real paginated product API
- Add product category, rating, and description
- Add retry handling for failed requests
- Format prices based on actual currency data
- Add search, filter, and sort features
- Improve accessibility for buttons and card content

## Learning Goals Covered

This project is good practice for:

- React component structure
- `useState` and `useEffect`
- Fetching API data
- Using `Promise.all()` for concurrent requests
- Conditional rendering for errors
- Responsive CSS layout

## Notes for Developers

If you want true pagination, you will need to switch from the current random product endpoint to an API endpoint that supports page-based listing. Right now, the `page` state is acting as a refresh trigger rather than a real page number.

## License

This project is for learning and practice purposes.
