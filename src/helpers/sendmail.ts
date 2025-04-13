import nodemailer from "nodemailer";

export async function sendCronTestMail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    const options = {
      from: process.env.GMAIL_EMAIL_ADDRESS, // sender address
      to: "cyruz.mhr999@gmail.com",
      subject: "Cron api test",
      html: `
       <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Test Cron Job</h2>
            <p>This is a sample email sent by the cron job for testing purposes.</p>
        </div>
      `,
    };
    const info = await transporter.sendMail(options);
    console.log("Cron test email sent successfully");
    return info;
  } catch (error) {
    console.log("Error sending otp email", error);
  }
}
