"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerUserService } from "../services/auth-service";

const config = {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: process.env.NODE_ENV == "production"
}

const schemaRegister = z.object({
    username: z.string().min(3).max(20, {
        message: "Username must between 3 and 20 characters"
    }),
    password: z.string().min(6).max(100, {
        message: "Password must between 6 and 100 characters"
    }),
    email: z.string().email({
        message: "Please enter a valid email adress"
    })
})

export async function registerUserAction(prevState: any, formData: FormData) {

    const validatedFields = schemaRegister.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email")
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Register"
        }
    }
    const responseData = await registerUserService(validatedFields.data);

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: "Oops! Something went wrong. Please try again"
        }
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            zodErrors: null,
            message: "Failed to Register"
        }
    }

    cookies().set("jwt", responseData.jwt, config);
    redirect("/dashboard");

    return {
        ...prevState,
        data: "ok"
    }

}