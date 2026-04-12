import type { Metadata } from "next";
import Link from "next/link";
import { getUserCart } from "./addProduct.action";
import CartHero from "./_Components/CartHero";
import CartEmptyState from "./_Components/CartEmptyState";
import CartLineList from "./_Components/CartLineList";
import CartOrderSummary from "./_Components/CartOrderSummary";
import { CartResType } from "@/Types/Cart.type";

export const metadata: Metadata = {
  title: "Cart | MEGA STORE",
  description: "Review your shopping cart and checkout.",
};

export default async function CartPage() {
  let cartResponse: CartResType | null = null;
  try {
    cartResponse = await getUserCart();
  } catch {
    cartResponse = null;
  }

  const dataCart =
    cartResponse?.data ?? ({ products: [], totalCartPrice: 0 } as CartResType["data"]);

  const products = dataCart.products ?? [];
  
  const numOfCartItems =
    cartResponse?.numOfCartItems ??
    products.reduce((n, line) => n + line.count, 0);


  const subtotal = dataCart.totalCartPrice ?? 0;


  const hasItems = products.length > 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <div className="pt-2 md:pt-4">
        <CartHero itemCount={numOfCartItems} />
      </div>

      {!hasItems ? (
        <div className="mt-8 md:mt-10">
          <CartEmptyState />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <CartLineList products={products} />
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <CartOrderSummary subtotal={subtotal} itemCount={numOfCartItems} />
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-500">
        <Link href="/" className="transition hover:text-blue-600">
          Home
        </Link>
        <span className="text-slate-300">·</span>
        <Link href="/Shop" className="transition hover:text-blue-600">
          Shop
        </Link>
        <span className="text-slate-300">·</span>
        <Link href="/Brands" className="transition hover:text-blue-600">
          Brands
        </Link>
      </div>
    </div>
  );
}
