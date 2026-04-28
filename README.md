# ShopWave — Premium Tech E-Commerce Store

![ShopWave Preview](https://image.thum.io/get/https://shopwave-three.vercel.app/)

A modern, responsive e-commerce storefront built with **Next.js 16**, **Firebase Authentication**, and **Tailwind CSS**. ShopWave showcases premium electronics with product browsing, secure login, protected management pages, and a polished UI.

## Live Demo

- 🌐 Live site: https://shopwave-three.vercel.app/

## Project Overview

ShopWave is a high-end electronics marketplace designed to demonstrate a full-stack front-end experience with authentication and product management. The app includes a landing page, product browsing, item detail pages, and authenticated user flows for adding and managing products.

## Main Technology Used

- **Next.js 16** (App Router, server + client components)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Firebase** (Authentication)
- **React Hot Toast** (notifications)
- **Lucide React** (icons)

## Main Features

- **Responsive landing page** with hero section, featured products, and promotional content
- **Product listing** with search, category filters, and sorting controls
- **Dynamic product details** pages for individual items
- **Firebase authentication** with Email/Password and Google sign-in
- **Protected Add Product page** for authenticated users
- **Protected Manage Products page** with product viewing and deletion
- **Clean UI and mobile-friendly design** for desktop, tablet, and phone

## Dependencies

### Runtime

- `next` 16.2.4
- `react` 19.2.4
- `react-dom` 19.2.4
- `firebase` ^12.12.1
- `lucide-react` ^1.11.0
- `react-hot-toast` ^2.6.0

### Development

- `tailwindcss` ^4
- `@tailwindcss/postcss` ^4
- `typescript` ^5
- `eslint` ^9
- `eslint-config-next` 16.2.4
- `@types/node` ^20
- `@types/react` ^19
- `@types/react-dom` ^19

## Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd shopwave
pnpm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new Firebase project
3. Enable **Authentication** > **Sign-in method** > **Email/Password** and **Google**
4. Register a new Web app and copy the config values

### 3. Add environment variables

Create `.env.local` at the project root and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 4. Run locally

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home / landing page with hero and featured products |
| `/items` | Public | Product listings with search and filter support |
| `/items/[id]` | Public | Product detail page with specs and related products |
| `/about` | Public | About page |
| `/login` | Public | Login / registration page |
| `/items/add` | Protected | Add a new product (requires login) |
| `/items/manage` | Protected | Manage and delete products |

## Deployment

Deployed on Vercel: https://shopwave-three.vercel.app/

To deploy your own version:

1. Push the repo to GitHub
2. Import it in [Vercel](https://vercel.com)
3. Add the Firebase environment variables under Project Settings
4. Deploy
