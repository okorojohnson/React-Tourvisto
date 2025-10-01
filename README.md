# React Tourvisto - Travel Booking Platform

## Overview

React Tourvisto is a modern travel booking platform built with React, offering users an intuitive interface to discover, plan, and book their dream vacations. The application features destination browsing, trip planning, secure payments, and user authentication.

## Features

-  Featured travel destinations
-  Advanced search and filtering
-  Detailed trip information
-  Secure payment processing
-  User authentication
-  Favorites management
-  Responsive design

## Tech Stack

- **Frontend Framework:** React.js
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **State Management:** React Context API
- **Payment Processing:** Stripe
- **Build Tool:** Vite

## Project Structure

```
react-tourvisto/
├── public/
│   ├── icons/
│   │   └── activity.svg
│   └── images/
│       ├── barcelona.jpg
│       ├── london.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedDestinations.jsx
│   │   └── HandpickTrips.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── DestinationContext.jsx
│   │   ├── BackendDataContext.jsx
│   │   └── LocalDataContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── Authpage.jsx
│   │   ├── Homepage.jsx
│   │   ├── TripDetailspage.jsx
│   │   ├── Paymentpage.jsx
│   │   └── Confirmationpage.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/react-tourvisto.git
```

2. Install dependencies

```bash
cd react-tourvisto
npm install
```

3. Create a `.env` file in the root directory

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

4. Start the development server

```bash
npm run dev
```

## Configuration

### Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk authentication public key

### Clerk Authentication Setup

1. Create a Clerk account
2. Set up your application
3. Copy your publishable key
4. Add it to your `.env` file

## Available Scripts

- `npm run dev`: Starts development server
- `npm run build`: Creates production build
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Routing Structure

- `/` - Authentication page
- `/home` - Main homepage with featured destinations
- `/destination/:id` - Individual trip details
- `/payment-stripe` - Payment processing
- `/payment-confirmation` - Payment confirmation

## Context Providers

- `AuthProvider`: Manages user authentication state
- `DestinationProvider`: Handles destination data and filtering
- `BackendDataProvider`: Manages API data fetching
- `LocalDataProvider`: Handles local storage and preferences

## Components

- `Header`: Navigation and user interface
- `Hero`: Landing page hero section
- `FeaturedDestinations`: Displays featured travel locations
- `HandpickTrips`: Shows curated trip selections

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Clerk for authentication
- Tailwind CSS for styling
- React Router for routing
- Vite for build tooling
