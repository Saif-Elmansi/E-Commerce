import * as z from "zod";

export const schemaSignUp = z
  .object({
    name: z.string("enter your name"),
    email: z.email("enter your email"),
    password: z
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
    rePassword: z
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
    phone: z
      .string()
      .regex(
        /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
        "enter your phone number valied EGP",
      ),
  })
  .refine(
    function (params) {
      return params.password === params.rePassword;
    },
    { error: "the rePassword not same  password", path: ["rePassword"] },
  );

export type schematypesign = z.infer<typeof schemaSignUp>;
