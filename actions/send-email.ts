"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // simple server side validation
    if (!validateString(senderEmail, 500)) {
        return { error: "Invalid sender email" }
    }

    if (!validateString(message, 5000)) {
        return { error: "Invalid message" }
    }

    const {data, error} = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'pichak.nazariy@gmail.com',
            subject: 'New Message from Portfolio Contact Form',
            replyTo: senderEmail as string,
            react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string}),
        });
    
    return {data, error: error ? getErrorMessage(error) : null};

};