import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const username = process.env.MAILER_AUTH_EMAIL;
  const password = process.env.MAILER_AUTH_PASSWORD;
  const receiver = process.env.MAILER_RECEIVER_EMAIL;

  const formData = await request.json();
  const name = formData["name"];
  const email = formData["email"];
  const website = formData["website"];
  const comments = formData["comments"];
  const interests = formData["interests"];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: 'username',
      pass: 'password',
    },
  });

  try {
    await transporter.sendMail({
      from: username,
      to: receiver,
      subject: `Persona Pay | New contact form submission from ${name}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>website: ${website} </p>
        <p>Comments: ${comments} </p>
        <p>Interests: ${interests.join(", ")}</p>
        `,
    });

    return NextResponse.json({ message: "Success: email was sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
