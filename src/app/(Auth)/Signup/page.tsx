"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignUp, schematypesign } from "./Signup.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },

    resolver: zodResolver(schemaSignUp),
  });

  const rout = useRouter();

  async function handleSignUp(values: schematypesign) {
    try {
      console.log(values);

      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
          body: JSON.stringify(values),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const finalRes = await res.json();

      console.log(finalRes);
      if (finalRes.message === "success") {
        toast.success("success SIGN UP", {
          richColors: true,
          position: "top-center",
        });
        rout.push("/");
      } else {
        throw new Error(finalRes.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);

      toast.error((error as Error).message, {
        richColors: true,
        position: "top-center",
      });
    }
  }

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-10 bg-linear-to-b from-blue-50/80 via-white to-blue-50/40">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-blue-100 bg-white/90 backdrop-blur shadow-lg shadow-blue-900/5 p-6 md:p-8">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-block text-xl sm:text-2xl font-black text-slate-800 tracking-tight"
            >
              MEGA<span className="text-blue-600">STORE</span>
            </Link>
            <h1 className="mt-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-500 font-medium">
              Join us to get exclusive deals and faster checkout.
            </p>
          </div>

          <form
            action=""
            onSubmit={form.handleSubmit(handleSignUp)}
            className="space-y-4"
          >
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-slate-700 font-semibold text-sm"
                >
                  Name
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-slate-700 font-semibold text-sm"
                >
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your email"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
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
                  className="text-slate-700 font-semibold text-sm"
                >
                  Phone
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your phone"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-slate-700 font-semibold text-sm"
                >
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your password"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="rePassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="text-slate-700 font-semibold text-sm"
                >
                  Confirm password
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your repassword"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 mt-2 rounded-2xl bg-blue-600 text-white text-base font-bold shadow-md shadow-blue-500/25 hover:bg-blue-700"
          >
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 font-medium">
          Already have an account?{" "}
          <Link
            href="/Login"
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Sign in
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}
