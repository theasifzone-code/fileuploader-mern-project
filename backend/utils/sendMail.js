import nodemailer from "nodemailer";

// console.log(process.env.EMAIL_PASS)
export const sendOtpMail = async (email, otp, name) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    })
    await transporter.sendMail({
        from: `"FileUploader Support" <${process.env.EMAIL}>`,
        to: email,
        subject: `${name}, your pin is ${otp}. Please confirm your email address.`,
        html: `
     <div style="font-family:Arial">
    <p>Hi ${name},</p>
    <p>We received a request to verify your account.</p>
    <p>Your verification code is:</p>
    <h2 style="letter-spacing:2px">${otp}</h2>
    <p>This code will expire in 10 minutes.</p>
    <p>If you did not request this, you can safely ignore this email.</p>
    <br/>
    <p>Thanks,<br/>FileUploader Team</p>
  </div>
    `
    })
}