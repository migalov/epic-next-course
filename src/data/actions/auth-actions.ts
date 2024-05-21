"use server";

import { z } from "zod";

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
    
    console.log("Hello From Register User Action");

    const validateFields = schemaRegister.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email")
    });

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Register"
        }
    }

    return {
        ...prevState,
        data: "ok"
    }

}