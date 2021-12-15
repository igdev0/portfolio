import sendGrid from '@sendgrid/mail';
import fs from "fs";

export interface SendMailDataProps {
    subject: string;
    email: string;
    message: string;
    apiKey: string;
}

export default function sendMail({subject, message, email, apiKey}: SendMailDataProps) {
    const html = fs.readFileSync(`${process.cwd()}/src/email-templates/contact.html`, {encoding: "utf-8"});

    sendGrid.setApiKey(apiKey);
    return sendGrid.send({
        subject,
        from: "contact@dorultanianos.dev",
        to: "dorultanianos@gmail.com",
        html: html.replace("{{email}}", email).replace("{{message}}", message)
    })
}
