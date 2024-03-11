import { NextResponse } from 'next/server';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({ username: 'api', key: API_KEY })

    const currentYear = new Date().getFullYear();

    const messageData = {
        from: 'Baron Portfolio <contact-portfolio@gmail.com>',
        to: 'nmchiht@gmail.com',
        subject: 'Baron Portfolio Contacts',
        html:
            `<section style="max-width: 42rem; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 2rem; padding-bottom: 2rem; margin-left: auto; margin-right: auto; background-color: #ffffff;">
                
                <header>
                    <a href="#">
                        <img class="w-auto h-7 sm:h-8" style="width: auto; height: 1.75rem;" src="https://bnportfolio.vercel.app/images/logo-bn.png" alt="logo">
                    </a>
                </header>

                <main class="mt-8">
                    <h2 style="color: #4a5568;">Hi i'm ${name},</h2>
                    
                    <p style="margin-top: 1rem; line-height: 1.75; color: #718096;">
                        ${message}
                    </p>
                    
                    <p style="margin-top: 2rem; color: #718096;">
                        Thanks you !
                    </p>
                </main>
                
                <footer style="margin-top: 2rem;">
                    <p style="margin-top: 0.75rem; color: #6b7280;">© ${currentYear} Powered by Baron Nguyen. All Rights Reserved.</p>
                </footer>
            </section>`,
    }

    try {
        const emailRes = await client.messages.create(DOMAIN, messageData);
        console.log(emailRes);
    } catch (err) {
        console.log(err);
    }
    
    return NextResponse.json({ submitted: true }, { status: 200 });
}
