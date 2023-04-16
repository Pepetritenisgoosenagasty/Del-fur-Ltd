import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  const { name, email: em, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
      pass: `${process.env.NEXT_PUBLIC_SMTP_PASSWORD}`
    }
  });

  try {
    await transporter.sendMail({
      from: `${name} <${em}>`,
      to: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p>
        <p><strong>Email: </strong> ${em}</p>
        <p><strong>Subject: </strong> ${subject}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
      
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};