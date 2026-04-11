"use client";

import React, { useContext } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Gift,
  Heart,
  Mail,
  Phone,
  Search,
  ShoppingBag,
  Truck,
  User,
  UserPlus,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import { shopContext } from "../_Context/ShopContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);

  const { numberofShopItem } = useContext(shopContext) as any;

  const session = useSession();

  function logOut() {
    signOut({ redirect: true, callbackUrl: "/Login" });
  }

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setCategoriesOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="fixed z-50 bg-white w-full top-0">
      <div className="w-full  py-2 border-b border-gray-200/50 mb-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-[13px] font-medium text-slate-500">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck size={15} className="text-blue-600" />
              <span>Free Shipping on Orders 500 EGP</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift size={15} className="text-blue-600" />
              <span>New Arrivals Daily</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex items-center gap-4 border-r border-gray-300 pr-5">
              <Link
                href="tel:+18001234567"
                className="hover:text-blue-600 transition flex items-center gap-1.5 text-xs sm:text-[13px]"
              >
                <Phone size={14} />{" "}
                <span className="hidden md:inline">+1 (800) 123-4567</span>
              </Link>
              <Link
                href="mailto:support@freshcart.com"
                className="hover:text-blue-600 transition flex items-center gap-1.5 text-xs sm:text-[13px]"
              >
                <Mail size={14} />{" "}
                <span className="hidden lg:inline">Support</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {session.data ? (
                <button
                  onClick={logOut}
                  className="hover:text-blue-600 hover:cursor-pointer transition flex items-center gap-1.5 text-xs sm:text-sm"
                >
                  <User size={15} />{" "}
                  <span className="hidden sm:inline">Logout</span>
                </button>
              ) : (
                <>
                  {" "}
                  <Link href={"/Login"}>
                    <button className="hover:text-blue-600 hover:cursor-pointer transition flex items-center gap-1.5 text-xs sm:text-sm">
                      <User size={15} />{" "}
                      <span className="hidden sm:inline">Sign In</span>
                    </button>
                  </Link>
                  <Link href={"/Signup"}>
                    <button className="bg-blue-600 text-white hover:cursor-pointer px-2 sm:px-3 py-1 rounded-md hover:bg-blue-700 transition text-xs sm:text-sm">
                      <span className="hidden sm:inline">Sign Up</span>
                      <span className="sm:hidden">Sign Up</span>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <NavigationMenu
        className="px-4 sm:px-6 lg:px-10 max-w-full justify-between border-b pb-2 border-gray-200/50 mb-1"
        viewport={false}
      >
        <div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              MEGA<span className="text-blue-600">STORE</span>
            </div>
          </Link>

          <div className="hidden lg:flex grow max-w-xl px-3">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for products, brands..."
                className="w-full h-11 pl-5 pr-12 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none text-slate-600"
              />
              <button
                title="button search"
                className="absolute right-1.5 top-1.5 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenuList className="hidden lg:flex">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/Shop">Shop</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/Brands">Brands</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="flex items-center gap-2 sm:gap-4 px-2">
          {/* Mobile Search Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-full transition"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link href={"/"}>
            <div className="hidden xl:flex items-center gap-3 border-r pr-6 border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <BiSupport className="text-blue-600 text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-bold uppercase leading-none">
                  24/7 Support
                </span>
                <span className="text-sm font-bold text-slate-700">
                  Contact Us
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition"
            >
              <Heart size={20} className="sm:w-5.5 sm:h-5.5" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <Link
              href="/Cart"
              className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition"
            >
              <ShoppingBag size={20} className="sm:w-5.5 sm:h-5.5" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full">
                {numberofShopItem}
              </span>
            </Link>
          </div>
        </div>
      </NavigationMenu>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-slate-800">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands..."
                    className="w-full h-11 pl-5 pr-12 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none text-slate-600"
                  />
                  <button
                    title="button search"
                    className="absolute right-1.5 top-1.5 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-4">
                <Link
                  href="/"
                  className="py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-lg transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/Shop"
                  className="py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-lg transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>

                <Link
                  href="/Brands"
                  className="py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-lg transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Brands
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col  gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
