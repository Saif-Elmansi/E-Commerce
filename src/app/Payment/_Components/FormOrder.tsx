"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Banknote, CreditCard, Lock } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { sendOrderDet, ShippingAddressType } from "../_action/Order.action.api";
import { shopContext } from "@/app/_Context/ShopContext";
import { CartResType } from "@/Types/Cart.type";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ValueShippingType {
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}

export default function FormOrder() {
  const form = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
      type: "cash",
    },
  });

  const { dataCartContext, setDataCartContext, setNumberofShopItem } =
    useContext(shopContext) as {
      dataCartContext: CartResType;
      setDataCartContext: Function;
      setNumberofShopItem: Function;
    };

  const rout = useRouter();

  async function handleOrder(values: ValueShippingType) {
    console.log(values);

    const userData: ShippingAddressType = {
      shippingAddress: {
        details: values.details,
        phone: values.phone,
        city: values.city,
        postalCode: values.postalCode,
      },
    };

    const resss = await sendOrderDet(dataCartContext.cartId, userData);

    console.log("new order req", resss);

    toast.success(resss.message, {
      richColors: true,
      position: "top-center",
    });
    rout.push("/");
    setDataCartContext({});
    setNumberofShopItem(0);

    /* submit wired later */
  }

  return (
    <div className="rounded-3xl border border-slate-100/90 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-7 md:p-8">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-lg font-black text-slate-900 sm:text-xl">
          Shipping details
        </h2>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Where should we deliver your order?
        </p>
      </div>

      <form
        action=""
        onSubmit={form.handleSubmit(handleOrder)}
        className="mt-6 space-y-5"
      >
        <Controller
          name="details"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="text-sm font-bold text-slate-700"
              >
                Full address
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Street, building, floor, apartment…"
                autoComplete="street-address"
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="text-sm font-bold text-slate-700"
              >
                Phone
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="+20 1xx xxx xxxx"
                autoComplete="tel"
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Controller
            name="city"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-sm font-bold text-slate-700"
                >
                  City
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Cairo"
                  autoComplete="address-level2"
                  className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="postalCode"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-sm font-bold text-slate-700"
                >
                  Postal code
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Optional"
                  autoComplete="postal-code"
                  className="h-12 rounded-2xl border-slate-200 bg-slate-50/80 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-base font-black text-slate-900">
            Payment method
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Pick how you&apos;d like to pay.
          </p>
        </div>

        <Controller
          name="type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => field.onChange("cash")}
                  className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left transition ${
                    field.value === "cash"
                      ? "border-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/10"
                      : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      field.value === "cash"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-500 ring-1 ring-slate-200"
                    }`}
                  >
                    <Banknote size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">
                      Cash on delivery
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Pay when you receive
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => field.onChange("card")}
                  className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left transition ${
                    field.value === "card"
                      ? "border-blue-600 bg-blue-50/80 shadow-md shadow-blue-500/10"
                      : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      field.value === "card"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-500 ring-1 ring-slate-200"
                    }`}
                  >
                    <CreditCard size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">
                      Card (demo)
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Gateway not wired yet
                    </p>
                  </div>
                </button>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/40 px-4 py-4 text-sm font-medium text-slate-600 transition hover:border-blue-100 hover:bg-blue-50/30">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30"
          />
          <span>
            I agree to the{" "}
            <Link href="/" className="font-bold text-blue-600 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/" className="font-bold text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <Button
          type="submit"
          className="group mt-2 h-14 w-full rounded-2xl bg-blue-600 text-base font-black text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <Lock size={18} className="transition group-hover:scale-110" />
            Place order
          </span>
        </Button>
      </form>
    </div>
  );
}
