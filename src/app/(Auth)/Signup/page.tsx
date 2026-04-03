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
import { error } from "console";
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
    <div className="bg-amber-50 p-3 w-10/12 mx-auto">
      <h1 className="text-2xl my-3">sign up page</h1>

      <form action="" onSubmit={form.handleSubmit(handleSignUp)}>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Name"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your email"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>phone</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your phone"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your password"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="rePassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>rePassword</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your repassword"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button className="w-full text-2xl m-3 p-6">sign in</Button>
      </form>
    </div>
  );
}
