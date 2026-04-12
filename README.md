# MEGA STORE — E‑commerce Frontend

A storefront UI built with **Next.js (App Router)** and a public **REST API** for learning and iteration. It includes product listings, brands, cart, a payment checkout **UI**, authentication, and product detail pages.

---

## Prerequisites

| Tool | Notes |
|------|--------|
| **Node.js** | LTS recommended (e.g. 20.x or newer) |
| **npm** | Ships with Node (or use `pnpm` / `yarn` if you prefer) |

---

## Quick start

```bash
# Install dependencies
npm install

# Development server (default: http://localhost:3000)
npm run dev
```

```bash
# Run ESLint
npm run lint

# Production build
npm run build

# Run production server (after build)
npm run start
```

---

## Environment variables

Create **`.env.local`** in the project root (next to `package.json`) and add:

| Variable | Purpose |
|----------|---------|
| `BETTER_AUTH_SECRET` | **NextAuth** signing secret. Use a long random string in production. |
| `NEXTAUTH_SECRET` | Optional fallback used by `getToken` when `BETTER_AUTH_SECRET` is not set. |

> Without a valid secret, NextAuth sign-in and decoding the session token for API calls may not work correctly.

---

## How the project works

### 1. Layout and shell

- **`src/app/layout.tsx`**: **Exo** font, fixed **Navbar**, **Footer**, **NextAuth** provider, and **`ShopContext`** for the cart item count in the header.
- Routes live under **`src/app/**/page.tsx`** following the Next.js **App Router** convention.

### 2. External API

Data (products, brands, cart, auth) is fetched from:

`https://ecommerce.routemisr.com`

Examples of the layer that talks to the API:

| File | Role |
|------|------|
| `src/services/Product.ts` | Fetch products and a single product |
| `src/services/Brands.ts` | Fetch brands |
| `src/app/Cart/addProduct.action.ts` | Add to cart + fetch cart (Server Actions + token header) |
| `src/app/(Auth)/Login/Login.action.ts` | Sign-in and store API token in the `token` cookie |

### 3. Auth and tokens

- **NextAuth** (Credentials) in `src/lib/nextauth.confg.ts` calls the sign-in API and stores **`realTokenFromBackend`** inside the session JWT.
- **`src/utils/getMytoken.ts`**: reads the API token from the `token` cookie (after Login/Signup server actions) or decodes the NextAuth session JWT for protected requests (e.g. cart).

### 4. Cart and payment

- **Cart**: `src/app/Cart/` renders cart data from `getUserCart()` (inner payload is referred to as `dataCart` in the UI layer).
- **Payment**: `src/app/Payment/` is a checkout **form UI** (`react-hook-form`); wiring a real order endpoint is left to your backend integration.

### 5. Images (home hero slider)

Path aliases in `tsconfig.json`:

- `@/*` → `./src/*`
- `@images/*` → `./src/app/assets/images/*`

Place hero images under `src/app/assets/images/` and import them in `src/app/page.tsx` as shown there.

---

## Main routes

| Path | Description |
|------|-------------|
| `/` | Home: hero slider, categories, featured products |
| `/Shop` | All products with search / filters (client UI) |
| `/Brands` | Brand directory |
| `/Product/[id]` | Product detail |
| `/Cart` | Shopping cart |
| `/Payment` | Checkout UI |
| `/Login`, `/Signup` | Authentication |
| `/Contact` | Contact page |

---

## Folder structure (short)

```
src/
├── app/                    # Next.js routes and pages
│   ├── _Components/        # Shared UI (Navbar, Footer, Product…)
│   ├── _Context/           # React context (e.g. cart count)
│   ├── _providers/         # Session provider
│   ├── (Auth)/             # Login & signup route group
│   ├── Cart/, Shop/, Brands/, Payment/, Contact/, Product/
│   └── assets/images/      # Static assets (optional for slider)
├── components/ui/          # shadcn-style UI primitives
├── lib/                    # NextAuth configuration
├── services/               # Data-fetching helpers
├── Types/                  # TypeScript types for API shapes
└── utils/                  # Helpers (e.g. token resolution)
```

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**, **Tailwind CSS v4**
- **NextAuth v4** (Credentials)
- **react-hook-form** + **Zod** (forms)
- **Swiper** (home hero carousel)
- **lucide-react** / **react-icons**
- **Sonner** (toast notifications)

---

## Developer notes

1. Restart `npm run dev` after changing environment variables.
2. Server Actions that use `cookies()` or `headers()` run **on the server only** — do not assume they run in the browser.
3. For scaling: consider a single `NEXT_PUBLIC_API_URL` (or similar) instead of hard-coded base URLs inside services.

---

## License & contributing

This is a learning / demo project. Add a **Contributing** or **License** section here to match your repository policy.
