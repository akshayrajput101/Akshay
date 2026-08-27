import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, budget, vision } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name and Email are required.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const emailUser = process.env.EMAIL_USER || 'mrakshay31@gmail.com';
    const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';

    if (!emailPass) {
      console.error('Server Configuration Error: EMAIL_PASS environment variable is missing on Vercel.');
      return NextResponse.json(
        {
          success: false,
          error: 'Server email credentials are not configured. Please set EMAIL_PASS in your Vercel Project Settings > Environment Variables.',
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Dark Luxury HTML Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070709; color: #ffffff; margin: 0; padding: 25px; }
          .container { max-width: 600px; margin: 0 auto; background: #0f0f14; border: 1px solid #d4af37; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
          .header { background: linear-gradient(135deg, #181824 0%, #0d0d12 100%); padding: 30px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); text-align: center; }
          .header h1 { margin: 0; color: #d4af37; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
          .header p { margin: 6px 0 0; color: #a1a1aa; font-size: 13px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #d4af37; font-weight: bold; margin-bottom: 5px; }
          .value { font-size: 15px; color: #f4f4f5; background: #161620; padding: 12px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06); }
          .message-box { font-size: 15px; color: #f4f4f5; background: #161620; padding: 16px; border-radius: 6px; border: 1px solid rgba(212,175,55,0.25); white-space: pre-wrap; line-height: 1.6; }
          .footer { padding: 20px 30px; background: #09090d; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #71717a; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✦ New Client Project Inquiry</h1>
            <p>Creative Visuals Studio • Video Editing & Design Repertoire</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Client Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Client Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #00F2FE; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Requested Service</div>
              <div class="value">${service || 'Video Editing'}</div>
            </div>
            <div class="field">
              <div class="label">Estimated Budget</div>
              <div class="value" style="color: #d4af37; font-weight: bold;">${budget || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="label">Project Vision & Timeline</div>
              <div class="message-box">${vision || 'No additional details provided.'}</div>
            </div>
          </div>
          <div class="footer">
            Delivered directly to mrakshay31@gmail.com • Received: ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Creative Portfolio" <${emailUser}>`,
      to: 'mrakshay31@gmail.com',
      replyTo: email,
      subject: `✦ New Inquiry: ${name} [${service || 'Video Project'}]`,
      text: `Client Name: ${name}\nClient Email: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject Vision:\n${vision}`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Project Inquiry sent successfully to Akshay!',
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('API Contact Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to dispatch email.',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
