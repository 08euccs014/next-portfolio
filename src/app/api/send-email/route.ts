import { NextRequest, NextResponse } from 'next/server';

const MAILJET_API_KEY = '7c76ce0baf824de8681a534b3703f6a9';
const MAILJET_SECRET_KEY = 'acf4ed2495baffdd41f3295651f51f4f';
const RECIPIENT_EMAIL = 'mohit.agrawal@starlingelevate.com';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare Mailjet API request
    const mailjetData = {
      Messages: [
        {
          From: {
            Email: email,
            Name: name,
          },
          To: [
            {
              Email: RECIPIENT_EMAIL,
              Name: 'Mohit Agrawal',
            },
          ],
          Subject: `Portfolio Contact: ${subject}`,
          TextPart: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          HTMLPart: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4A4E8C; border-bottom: 2px solid #EC4899; padding-bottom: 10px;">
                New Lead From Portfolio
              </h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
                <h3 style="color: #4A4E8C; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
                <p style="margin: 0; color: #1976d2; font-size: 14px;">
                  This message was sent from your portfolio contact form.
                </p>
              </div>
            </div>
          `,
        },
      ],
    };

    // Send email via Mailjet
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify(mailjetData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Mailjet API Error:', result);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully!',
        messageId: result.Messages?.[0]?.To?.[0]?.MessageID 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
