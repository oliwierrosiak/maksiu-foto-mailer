import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.SMTP_USER)
console.log(process.env.SMTP_PASS)

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export default transporter