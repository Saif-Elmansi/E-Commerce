"use client";

import * as React from "react";
import Link from "next/link";
import imgLogo from "../assets/images/Main Logo.png";
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
} from "lucide-react";
import { BiSupport } from "react-icons/bi";

export function Navbar() {
  return (
    <>
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

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-gray-300 pr-5">
              <Link
                href="tel:+18001234567"
                className="hover:text-blue-600 transition flex items-center gap-1.5"
              >
                <Phone size={14} /> +1 (800) 123-4567
              </Link>
              <Link
                href="mailto:support@freshcart.com"
                className="hover:text-blue-600 transition flex items-center gap-1.5"
              >
                <Mail size={14} /> Support
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-blue-600 transition flex items-center gap-1.5">
                <User size={15} /> Sign In
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavigationMenu className="px-10 max-w-full justify-between">
        <Link href="/" className="shrink-0">
          <div className="text-2xl font-bold text-slate-800 tracking-tight">
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
        <NavigationMenuList>
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
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-30">
                <ListItem href="/docs" title="All Categorise"></ListItem>
                <ListItem href="/" title="Electronics"></ListItem>
                <ListItem href="/" title="Women's Fashion"></ListItem>
                <ListItem href="/" title="Men's Fashion"></ListItem>
                <ListItem href="/" title="Beauty & Health"></ListItem>
              </ul>
            </NavigationMenuContent>
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
        <div className="flex items-center px-2">
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

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition"
            >
              <Heart size={22} />
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <Link
              href="/"
              className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition"
            >
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 h-4 w-4 bg-blue-600 text-white text-[10px] flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
          </div>
        </div>
      </NavigationMenu>
    </>
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
