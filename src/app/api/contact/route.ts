import {NextResponse} from 'next/server';
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SG_KEY??"No API key");

export async function POST(request: Request) {
  const body: {message: string, email: string} = await request.json();
  if(!body.email || !body.message) {return NextResponse.json({error: `Email and message fields are required`}, {status: 400})}
  const msg = {
    to: process.env.NEXT_PUBLIC_CONTACT_RECEIVER??"",
    from: process.env.NEXT_PUBLIC_SG_SENDER??"", // Use the email address or domain you verified above
    subject: `New message from ${body.email}`,
    html: `<h2>New message from contact form</h2><p><p>Contact: ${body.email}</p><strong>Message:</strong></p><p>${body.message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({message: "Message sent successfully!"});
  } catch (err) {
    const _err = err as Error;
    return NextResponse.json({error: "Failed to send message", details: _err.message}, {status: 500})
  }
}