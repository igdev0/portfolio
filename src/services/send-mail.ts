import sendGrid from '@sendgrid/mail';
import fs from "fs";

export interface SendMailDataProps {
    subject: string;
    email: string;
    message: string;
    apiKey: string;
    template?: string,
    cv_link?: string;
    to?: string;
    from?: string;
}

export default function sendMail({
                                     to = "dorultanianos@gmail.com",
                                     from = "contact@dorultanianos.dev",
                                     subject,
                                     message,
                                     email,
                                     apiKey,
                                     cv_link,
                                     template = "contact.html"
                                 }: SendMailDataProps) {
    const html = fs.readFileSync(`${process.cwd()}/src/email-templates/${template}`, {encoding: "utf-8"});

    sendGrid.setApiKey(apiKey);
    return sendGrid.send({
        subject,
        from,
        to,
        html: html.replace("{{email}}", email).replace("{{message}}", message).replaceAll("{{cv_link}}", cv_link ?? "")
    })
}
