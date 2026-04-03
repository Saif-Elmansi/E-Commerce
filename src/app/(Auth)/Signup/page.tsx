"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignUp, schematypesign } from "./Signup.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthSplitLayout from "@/app/_Components/Auth/AuthSplitLayout";
import { UserPlus } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { signupServerAction } from "./Signup.action";

function passwordStrengthLabel(score: number) {
  if (score <= 0) return { text: "Weak", color: "bg-red-400", width: "w-1/4" };
  if (score === 1)
    return { text: "Fair", color: "bg-orange-400", width: "w-1/2" };
  if (score === 2)
    return { text: "Good", color: "bg-amber-400", width: "w-3/4" };
  return { text: "Strong", color: "bg-emerald-500", width: "w-full" };
}

function scorePassword(value: string) {
  let s = 0;
  if (value.length >= 8) s++;
  if (/[0-9]/.test(value)) s++;
  if (/[^A-Za-z0-9]/.test(value)) s++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) s++;
  return Math.min(s, 4);
}

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

  const pwd = form.watch("password");
  const strengthScore = useMemo(() => scorePassword(pwd || ""), [pwd]);
  const strengthUi = passwordStrengthLabel(strengthScore);

  async function handleSignUp(values: schematypesign) {
    try {
      console.log(values);

      const finalRes = await signupServerAction(values);

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
    <AuthSplitLayout mode="signup">
      <div className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-md md:p-8">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Create your account
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Start your journey with us today.
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
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
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
                  placeholder="Enter Your password"
                  autoComplete="off"
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                <div className="space-y-1.5 pt-0.5">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${strengthUi.color} ${strengthUi.width}`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Strength: {strengthUi.text}</span>
                    <span className="text-slate-400">
                      8+ chars, numbers & symbols
                    </span>
                  </div>
                </div>

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
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
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
                  className="h-11 rounded-xl border-slate-200 bg-slate-50/60 px-4 transition hover:border-slate-300 focus-visible:border-blue-400 focus-visible:ring-blue-200/50 md:text-sm"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/40 px-3 py-3 text-sm font-medium text-slate-600 transition hover:border-blue-100 hover:bg-blue-50/30">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30"
            />
            <span>
              I agree to the{" "}
              <Link
                href="/"
                className="font-bold text-blue-600 hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="font-bold text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <Button
            type="submit"
            className="group mt-1 h-12 w-full rounded-2xl bg-blue-600 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <UserPlus
                size={18}
                className="transition group-hover:scale-110"
              />
              Create my account
            </span>
          </Button>
        </form>

        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Already have an account?{" "}
          <Link
            href="/Login"
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
}
