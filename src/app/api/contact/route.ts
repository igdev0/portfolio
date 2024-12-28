import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {

  const body: {message: string, email: string} = await request.json();
  if(!body.email || !body.message) {return NextResponse.json({error: `Email and message fields are required`}, {status: 400})}

  try {
    const config = {
      host: process.env.NEXT_PUBLIC_SMTP_HOST??"",
      secure: true,
      auth: {
        type: "login",
        user: process.env.NEXT_PUBLIC_AWS_USER??"",
        pass: process.env.NEXT_PUBLIC_AWS_PASS??""
      },
      port: process.env.NEXT_PUBLIC_SMTP_PORT??465,
    }

    const transporter = nodemailer.createTransport(config as keyof object)

    await transporter.sendMail({
      subject: `New message from ${body.email}`,
      to: process.env.NEXT_PUBLIC_CONTACT_RECEIVER,
      from: process.env.NEXT_PUBLIC_CONTACT_SENDER??"",
      html:`<h2>New message from contact form</h2><p><p>Contact: ${body.email}</p><strong>Message:</strong></p><p>${body.message}</p>`,
    })

    return NextResponse.json({message: "Message sent successfully!"});
  } catch (err) {
    const _err = err as Error;
    return NextResponse.json({error: "Failed to send message", details: _err.message}, {status: 500})
  }
}