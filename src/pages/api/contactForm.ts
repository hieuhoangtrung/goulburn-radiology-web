import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || 'goulburnradiology.com.au';
const MAILGUN_TO = process.env.MAILGUN_TO_EMAIL || 'admin@goulburnradiology.com.au';

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY });

// Simple in-memory rate limiting (5 submissions per 15 min per IP)
const rateLimitMap = new Map<string, { count: number; ts: number }>();
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const window = 15 * 60 * 1000;
  const record = rateLimitMap.get(ip);
  if (!record || now - record.ts > window) {
    rateLimitMap.set(ip, { count: 1, ts: now });
    return true;
  }
  if (record.count >= 5) return false;
  record.count++;
  return true;
};

const sanitize = (s: string) => s.trim().replace(/[<>]/g, '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp;

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required.' });
  }
  if (name.length > 100 || email.length > 255 || message.length > 3000) {
    return res.status(400).json({ message: 'One or more fields are too long.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone || '');
  const safeSubject = sanitize(subject || 'General Enquiry');
  const safeMessage = sanitize(message);
  const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

  try {
    await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Goulburn Radiology Website <noreply@${MAILGUN_DOMAIN}>`,
      'h:Reply-To': `${safeName} <${safeEmail}>`,
      to: MAILGUN_TO,
      subject: `[Website Enquiry] ${safeSubject} — from ${safeName}`,
      text: `New enquiry from the Goulburn Radiology website:

Name:    ${safeName}
Email:   ${safeEmail}
Phone:   ${safePhone || 'Not provided'}
Subject: ${safeSubject}

Message:
${safeMessage}

---
Submitted: ${timestamp} AEST
IP: ${ip}`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #e0e0e0;border-radius:8px;">
  <div style="background:#1B273A;padding:20px;border-radius:6px 6px 0 0;margin:-20px -20px 20px;">
    <h2 style="color:#fff;margin:0;font-size:20px;">New Website Enquiry</h2>
    <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">Goulburn Radiology</p>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <tr><td style="padding:10px 12px;background:#f8f8f8;font-weight:bold;width:100px;border:1px solid #eee;">Name</td><td style="padding:10px 12px;border:1px solid #eee;">${safeName}</td></tr>
    <tr><td style="padding:10px 12px;background:#f8f8f8;font-weight:bold;border:1px solid #eee;">Email</td><td style="padding:10px 12px;border:1px solid #eee;"><a href="mailto:${safeEmail}" style="color:#414D63;">${safeEmail}</a></td></tr>
    <tr><td style="padding:10px 12px;background:#f8f8f8;font-weight:bold;border:1px solid #eee;">Phone</td><td style="padding:10px 12px;border:1px solid #eee;">${safePhone || '<em style="color:#999;">Not provided</em>'}</td></tr>
    <tr><td style="padding:10px 12px;background:#f8f8f8;font-weight:bold;border:1px solid #eee;">Subject</td><td style="padding:10px 12px;border:1px solid #eee;">${safeSubject}</td></tr>
  </table>
  <div style="background:#f8f8f8;border:1px solid #eee;border-radius:6px;padding:16px;margin-bottom:20px;">
    <h3 style="margin:0 0 10px;font-size:15px;color:#1B273A;">Message</h3>
    <p style="margin:0;line-height:1.7;white-space:pre-wrap;color:#333;">${safeMessage}</p>
  </div>
  <p style="font-size:12px;color:#999;border-top:1px solid #eee;padding-top:12px;margin:0;">
    Submitted: ${timestamp} AEST &nbsp;|&nbsp; IP: ${ip}
  </p>
</div>`,
    });

    return res.status(200).json({ message: 'Your enquiry has been sent. We will be in touch shortly.' });
  } catch (error) {
    console.error('Mailgun error:', error);
    return res.status(500).json({ message: 'Failed to send. Please call us on 02 4821 4666.' });
  }
}
