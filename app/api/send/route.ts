import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    // const { email, subject, message } = req.body;
    // try {
    //     const data = await resend.emails.send({
    //         from: `${email}`,
    //         to: ['nmchiht@gmail.com'],
    //         subject: `${subject}`,
    //         react: `${message}`,
    //     });

    //     return Res.status(200).json(data);
    // } catch (error) {
    //     return res.status(400).json({ error });
    // }
}
