import nodemailer from 'nodemailer';

class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendPasswordResetEmail(to: string, token: string) {
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to,
            subject: 'Password Reset',
            text: `You requested a password reset. Click the link to reset your password: ${resetUrl}`,
            html: `<p>You requested a password reset. Click the link to reset your password: <a href="${resetUrl}">Reset Password</a></p>`,
        };

        await this.transporter.sendMail(mailOptions);
    }
}

export default new EmailService();