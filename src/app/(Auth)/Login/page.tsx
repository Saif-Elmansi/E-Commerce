"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignIn, schematypesignIn } from "./Signup.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthSplitLayout from "@/app/_Components/Auth/AuthSplitLayout";
import { LogIn } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { loginServerAction } from "./Login.action";

export default function page() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(schemaSignIn),
  });

  const rout = useRouter();

  async function handleSignIn(values: schematypesignIn) {
    try {
      console.log(values);

      const finalRes = await loginServerAction(values);

      console.log(finalRes);
      if (finalRes === "success") {
        toast.success("success SIGN UP", {
          richColors: true,
          position: "top-center",
        });
        rout.push("/");
      } else {
        throw new Error(finalRes || "Something went wrong");
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
    <AuthSplitLayout mode="login">
      <div className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-md md:p-8">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Sign in
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Continue your shopping journey with us.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 active:scale-[0.98]"
          >
            <FaGoogle className="text-lg text-blue-600" />
            Google
          </button>
          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 active:scale-[0.98]"
          >
            <FaFacebookF className="text-lg text-blue-600" />
            Facebook
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs font-bold uppercase tracking-wider">
            <span className="bg-white px-3 text-slate-400">or</span>
          </div>
        </div>

        <form
          action=""
          onSubmit={form.handleSubmit(handleSignIn)}
          className="space-y-4"
        >
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
                  placeholder="you@example.com"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
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
                  placeholder="••••••••"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            className="group mt-2 h-12 w-full rounded-2xl bg-blue-600 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <LogIn size={18} className="transition group-hover:scale-110" />
              Sign in
            </span>
          </Button>
        </form>

        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/Signup"
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
}
