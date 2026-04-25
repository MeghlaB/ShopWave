# ShopWave — Premium Tech E-Commerce Store

A modern e-commerce application built with Next.js 16 (App Router), Firebase Authentication, and Tailwind CSS.

## Project Description

ShopWave is a premium electronics and gadgets store where users can browse products, view detailed specs, and manage their own listings. It features a polished, responsive UI with public and protected pages powered by Firebase Authentication.

## Key Features

- **Landing Page** with 6 sections: Hero, Featured Products, Categories, Why Choose Us, Testimonials, Sale Banner
- **Product Listing** with real-time search + 3 filter types (category, price range, rating) and sorting
- **Product Details** with full specs, related products, and dynamic routing
- **Firebase Authentication** — Email/Password + Google Sign-In
- **Add Product** (protected) — form with inline validation and image preview
- **Manage Products** (protected) — full table with View & Delete actions
- **Responsive** across mobile, tablet, and desktop

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Firebase** (Authentication)
- **Tailwind CSS v4**
- **Lucide React** (icons)
- **React Hot Toast** (notifications)

## Setup & Installation

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd shopwave
pnpm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → Sign-in methods → Enable **Email/Password** and **Google**
4. Go to Project Settings → Your Apps → Add a Web App
5. Copy your config values

### 3. Environment Variables

Edit `.env.local` with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with hero, featured products, and sections |
| `/items` | Public | Product listing with search and filters |
| `/items/[id]` | Public | Product detail page with specs and related items |
| `/about` | Public | About page with team and company story |
| `/login` | Public | Sign in / Register (email + Google) |
| `/items/add` | Protected | Add a new product (requires login) |
| `/items/manage` | Protected | View and delete products (requires login) |

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all `NEXT_PUBLIC_FIREBASE_*` environment variables in Vercel dashboard
4. Deploy!
