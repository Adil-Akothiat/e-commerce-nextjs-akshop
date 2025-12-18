# 🛒 E-Commerce Platform - Next.js Clean Architecture

A modern, scalable e-commerce application built with **Next.js 16**, **TypeScript**, and **Redux Toolkit**. This project demonstrates a **Feature-Driven Clean Architecture** pattern used by enterprise-level teams to ensure code maintainability, scalability, and clear separation of concerns.

## 🎯 Architecture Philosophy

This project follows the **Feature-Based Architecture** principle, organizing code by business domain rather than technical type. This approach ensures:

- **High Cohesion**: Related code stays together
- **Low Coupling**: Features are independent and self-contained
- **Scalability**: New features can be added without affecting existing ones
- **Team Collaboration**: Multiple developers can work on different features simultaneously
- **Easy Testing**: Each feature can be tested in isolation

### Why This Structure?

Instead of organizing files by technical type (all hooks in one folder, all components in another), we organize by **Feature/Domain**. This mirrors how real-world software teams structure large applications, making it easier to:

- Navigate the codebase
- Understand business logic
- Identify which code belongs to which feature
- Prevent regressions when making changes

---

## 📂 Project Structure

```
src/
├── app/                     # Next.js App Router (Routing Layer)
│   ├── auth/
│   │   ├── register/        # User registration page
│   │   └── signin/          # User sign-in page
│   ├── contact/             # Contact page
│   ├── mycart/              # Shopping cart page
│   ├── products/
│   │   ├── [id]/            # Dynamic product detail page
│   │   └── page.tsx         # Products listing page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Homepage
│
├── components/              # Shared Global Components
│   ├── layouts/
│   │   ├── Footer/          # Site footer with newsletter
│   │   └── Header/          # Navigation, search, cart icon
│   │       └── SearchBar/   # Product search functionality
│   └── ui/                  # Reusable UI Components
│       ├── ErrorBoundary/   # Error handling wrapper
│       ├── loaders/         # Loading indicators
│       └── notfound/        # 404 components
│
├── features/                # Feature Modules (Domain-Driven)
│   ├── auth/                # Authentication domain
│   │   └── components/
│   │       ├── Register/    # Registration form & logic
│   │       └── SignIn/      # Sign-in form & logic
│   │
│   ├── cart/                # Shopping cart domain
│   │   ├── components/
│   │   │   ├── Items.tsx    # Cart items list
│   │   │   └── TotalItems.tsx # Cart summary
│   │   └── index.tsx        # Cart public API
│   │
│   ├── contact/             # Contact form domain
│   │   ├── components/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactImage.tsx
│   │   └── index.tsx
│   │
│   ├── home/                # Homepage domain
│   │   ├── components/
│   │   │   ├── Banner/      # Hero carousel
│   │   │   ├── Deals/       # Special offers section
│   │   │   ├── latestProducts/
│   │   │   ├── orderSecurity/
│   │   │   ├── OurBrands.tsx
│   │   │   └── PopularProducts.tsx
│   │   ├── types/           # Homepage-specific types
│   │   ├── home.css
│   │   └── index.tsx        # Public API
│   │
│   └── products/            # Products domain (Core feature)
│       ├── api/
│       │   ├── api.ts       # Product API calls
│       │   └── types.ts     # API response types
│       ├── components/
│       │   ├── detail/      # Product detail page components
│       │   │   ├── ProductDetails.tsx
│       │   │   ├── ProductGrid.tsx
│       │   │   ├── ProductImage.tsx
│       │   │   └── RelatedProducts.tsx
│       │   ├── list/        # Product listing components
│       │   │   ├── Filter/  # Category & price filters
│       │   │   └── Pagination.tsx
│       │   └── shared/      # Reusable product components
│       │       └── ProductCard/
│       │           ├── HorizontalCard.tsx
│       │           ├── VerticalCard.tsx
│       │           └── index.tsx
│       ├── hooks/
│       │   └── hooks.ts     # Custom product hooks
│       └── index.tsx        # Products public API
│
├── lib/                     # Core utilities & configuration
│   ├── api-errors.ts        # Centralized error handling
│   └── fetcher.ts           # HTTP client configuration
│
├── providers/               # React Context Providers
│   ├── ReactQueryProvider.tsx # TanStack Query setup
│   └── types.ts
│
├── redux/                   # Global State Management
│   ├── hooks.ts             # Typed Redux hooks
│   ├── store.ts             # Store configuration
│   └── types.ts             # Redux types
│
├── types/                   # Global TypeScript definitions
│   └── index.ts
│
└── utils/                   # Pure helper functions
    ├── index.ts
    └── types.ts

public/
└── assets/                  # Static assets
    ├── banner/              # Homepage banners
    ├── contact/             # Contact page images
    └── footer/
        └── icons/           # Payment & app store badges
```

---

## 🏗️ Key Engineering Features

### 1. **Public API Pattern (Encapsulation)**
Each feature folder has an `index.tsx` that acts as a **gateway**. This prevents "leaky abstractions" by only exporting what the rest of the app needs to know about.

```typescript
// features/products/index.tsx exports only what's needed
export { ProductCard } from './components/shared/ProductCard';
export { useProducts } from './hooks/hooks';
```

### 2. **Hybrid State Management**
- **Server State**: TanStack Query handles API data, caching, and revalidation
- **Client State**: Redux Toolkit manages global UI state and persistent cart data

This separation ensures optimal performance and clear responsibility boundaries.

### 3. **Component Strategy (Vertical vs Horizontal)**
The `ProductCard` implements a flexible pattern:
- `VerticalCard` for grid layouts (product listings)
- `HorizontalCard` for featured/banner sections

Both share the same data types and business logic while presenting different UI layouts.

### 4. **Robust Error Handling**
- **Client-Side**: Custom `ErrorBoundary` catches runtime errors without crashing the app
- **API-Side**: Centralized `api-errors.ts` handles HTTP status codes (401, 404, 500) globally

### 5. **Type Safety**
TypeScript is used throughout with:
- Strict type checking for API responses
- Shared type definitions across features
- Type-safe Redux hooks

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.9 |
| **State Management** | Redux Toolkit 2.11 |
| **Server State** | TanStack Query 5.90 |
| **Styling** | Tailwind CSS 4.1 + DaisyUI 5.5 |
| **UI Components** | Material Tailwind 2.1 |
| **Icons** | React Icons 5.5 |
| **Animations** | TypeIt React 2.7, React Fast Marquee 1.6 |
| **Error Handling** | React Error Boundary 6.0 |
| **Image Optimization** | Sharp 0.34 |

---

## 📦 Dependencies Breakdown

### Core Dependencies
```json
{
  "next": "^16.0.10",                    // React framework
  "react": "^19.2.3",                    // UI library
  "react-dom": "^19.2.3",                // React DOM bindings
  "typescript": "^5.9.3"                 // Type safety
}
```

### State Management
```json
{
  "@reduxjs/toolkit": "^2.11.1",         // Global state
  "react-redux": "^9.2.0",               // Redux React bindings
  "@tanstack/react-query": "^5.90.12"    // Server state & caching
}
```

### UI & Styling
```json
{
  "tailwindcss": "^4.1.18",              // Utility-first CSS
  "daisyui": "^5.5.13",                  // Tailwind components
  "@material-tailwind/react": "^2.1.10", // Material Design components
  "react-icons": "^5.5.0"                // Icon library
}
```

### Features & Utilities
```json
{
  "react-error-boundary": "^6.0.0",      // Error handling
  "react-fast-marquee": "^1.6.5",        // Scrolling animations
  "typeit-react": "^2.7.8",              // Typing animations
  "sharp": "^0.34.5"                     // Image optimization
}
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

> "I implemented a **Feature-Based Clean Architecture** to ensure high cohesion and low coupling. By grouping components, hooks, and API logic by business domain—like Products, Cart, and Auth—I've made the codebase easier to navigate for teams and ensured that changes in one feature don't cause regressions in others.
> 
> I used a **hybrid state management** approach: TanStack Query for server state with automatic caching and revalidation, and Redux Toolkit for global client state like the shopping cart. This separation of concerns improves performance and makes the data flow predictable.
> 
> The architecture also implements the **Public API Pattern** where each feature exports only what's necessary through an index file, preventing internal implementation details from leaking across feature boundaries. This makes the project much easier to test, scale, and maintain as the e-commerce domain grows."

---

## 📝 Project Highlights

✅ **Feature-driven architecture** for scalability  
✅ **Type-safe** throughout with TypeScript  
✅ **Server-side rendering** with Next.js App Router  
✅ **Optimized images** with Sharp  
✅ **Global error boundaries** for reliability  
✅ **Responsive design** with Tailwind CSS  
✅ **Modern UI components** with Material Tailwind & DaisyUI  
✅ **Efficient state management** with Redux Toolkit & TanStack Query  
✅ **Component reusability** with shared UI library  

---

## 🎓 Learning Resources

This architecture is inspired by:
- **Clean Architecture** by Robert C. Martin
- **Domain-Driven Design** principles
- Enterprise-level React/Next.js patterns

---

## 📄 License

This project is private and intended for portfolio demonstration purposes.

---

**Built with ❤️ using modern web technologies and clean architecture principles.**