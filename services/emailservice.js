import nodemailer from "nodemailer";

export const sendContactEmail = async (contactData) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", // or use custom SMTP
        auth: {
            user: process.env.COMPANY_EMAIL,
            pass: process.env.COMPANY_EMAIL_PASS
        }
    });

    const mailOptions = {
        from: contactData.email,
        to: process.env.COMPANY_EMAIL,
        subject: `New Contact Query from ${contactData.name}`,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Message:</strong><br>${contactData.message}</p>
    `
    };

    await transporter.sendMail(mailOptions);
};
