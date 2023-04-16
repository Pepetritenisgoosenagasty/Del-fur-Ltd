import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  const { quote, email, job_type, request_status, location } = req.body;
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
      from: `${email}`,
      to: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
      subject: `Contact form submission from ${email}`,
      html: `<p>Request For Quote Form Submission</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Quote: </strong> ${quote}</p>
        <p><strong>Job Type: </strong> ${job_type}</p>
        <p><strong>Request Status: </strong> ${request_status}</p>
        <p><strong>Location: </strong> ${location}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};