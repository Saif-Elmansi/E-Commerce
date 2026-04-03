import * as z from "zod";

export const schemaSignIn = z
  .object({
    
    email: z.email("enter your email"),
    password: z
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),

  })


export type schematypesignIn = z.infer<typeof schemaSignIn>;
