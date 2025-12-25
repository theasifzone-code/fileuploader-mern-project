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
<div style="max-width:520px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;
background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb">
  <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:20px;text-align:center;color:white">
    <h2 style="margin:0;">File Uploader</h2>
  </div>
  <div style="padding:24px;color:#374151">
    <p style="margin-top:0;">Hi <strong>${name}</strong>,</p>
    <p>We received a request to verify your account. Please use the verification code below:</p>
    <div style="margin:24px 0;text-align:center;">
      <span style="display:inline-block;
      background:#f3f4f6;
      color:#111827;
      padding:14px 24px;
      font-size:26px;
      letter-spacing:6px;
      border-radius:8px;
      font-weight:bold;">
        ${otp}
      </span>
    </div>
    <p style="font-size:14px;color:#6b7280;">
      This code will expire in <strong>10 minutes</strong>.
    </p>
    <p style="font-size:14px;color:#6b7280;">
      If you didn’t request this, you can safely ignore this email.
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
    <p style="font-size:13px;color:#9ca3af;">
      Thanks,<br/>
      <strong>FileUploader Team</strong>
    </p>
  </div>
</div>
`
    })
}