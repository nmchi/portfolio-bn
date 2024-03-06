import { EmailTemplate } from '../../../components/SendMail/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['nmchiht@gmail.com'],
            subject: 'Hello world',
            text: 'Content',
            react: EmailTemplate({ firstName: 'John' }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
