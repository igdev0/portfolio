import {NextApiRequest, NextApiResponse} from "next";
import sendMail from "../../services/send-mail";
import contactValidation from "../../validation/contact";

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);
    const errors = contactValidation.validate(data);
    if (errors.length) {
        return res.status(400).json(JSON.stringify({error: `${errors}`}));
    }
    try {
        await sendMail({
            subject: "Portfolio contact form.",
            template: "contact.html",
            message: data.message,
            email: data.email,
            apiKey: process?.env?.NEXT_PUBLIC_SENDGRID_API_KEY ?? ""
        })
    } catch (e: any) {
        return res.status(400).json({
            errors: [{
                message: "server error",
                type: e?.response?.server ?? "Error while trying to send email."
            }]
        })
    }

    return res.status(200).json({message: "Email sent success!"});
}
