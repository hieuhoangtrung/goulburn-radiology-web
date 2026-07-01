import FormData from 'form-data';
// eslint-disable-next-line import/no-unresolved
import Mailgun from 'mailgun.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || 'goulburnradiology.com.au';
const MAILGUN_TO_EMAIL = process.env.MAILGUN_TO_EMAIL;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY as string,
  // When you have an EU-domain, you must specify the endpoint:
  // url: "https://api.eu.mailgun.net"
});

// Rate limiting storage (in production, use Redis or database)
const rateLimitStorage = new Map<string, { count: number; lastRequest: number }>();

// Simple rate limiting function
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimitStorage.get(ip);
  if (!record) {
    rateLimitStorage.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (now - record.lastRequest > windowMs) {
    rateLimitStorage.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  record.lastRequest = now;
  return true;
};

// Input sanitization
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp;

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ message: 'Too many requests. Please try again later.' });
    }

    const { firstName, lastName, email, rating, message, allowTestimonial, csrfToken } = req.body;

    // Basic CSRF protection - verify token exists
    if (!csrfToken) {
      return res
        .status(403)
        .json({ message: 'Invalid request. Please refresh the page and try again.' });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !rating || !message) {
      return res
        .status(400)
        .json({ message: 'First name, last name, email, rating and message are required' });
    }

    // Validate field lengths
    if (firstName.length > 50) {
      return res.status(400).json({ message: 'First name is too long' });
    }
    if (lastName.length > 50) {
      return res.status(400).json({ message: 'Last name is too long' });
    }
    if (email.length > 255) {
      return res.status(400).json({ message: 'Email is too long' });
    }
    if (message.length > 2000) {
      return res.status(400).json({ message: 'Message is too long' });
    }

    // Validate rating
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Sanitize inputs
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Check for spam patterns
    const spamPatterns = [/viagra/i, /casino/i, /loan/i, /crypto/i, /investment/i, /winner/i];

    const fullText =
      `${sanitizedFirstName} ${sanitizedLastName} ${sanitizedEmail} ${sanitizedMessage}`.toLowerCase();
    const isSpam = spamPatterns.some(pattern => pattern.test(fullText));

    if (isSpam) {
      return res.status(400).json({ message: 'Message flagged as spam' });
    }

    const fullName = `${sanitizedFirstName} ${sanitizedLastName}`;
    const ratingStars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    const messageData = {
      from: `"${fullName}" <noreply@${MAILGUN_DOMAIN}>`,
      'h:Reply-To': sanitizedEmail,
      to: MAILGUN_TO_EMAIL,
      subject: `New Product Feedback from ${fullName} (${rating}/5 Stars)`,
      text: `
New Product Feedback Submission:

Name: ${fullName}
Email: ${sanitizedEmail}
Rating: ${rating}/5 stars (${ratingStars})
Allow Testimonial: ${allowTestimonial ? 'Yes' : 'No'}

Experience Details:
${sanitizedMessage}

---
Submitted from: ${req.headers.origin || 'Unknown'}
IP Address: ${ip}
User Agent: ${req.headers['user-agent'] || 'Unknown'}
Timestamp: ${new Date().toISOString()}
      `,
      html: `
<h2>New Product Feedback Submission</h2>
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
  <tr>
    <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; background-color: #f5f5f5;">Name:</td>
    <td style="border: 1px solid #ddd; padding: 12px;">${fullName}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; background-color: #f5f5f5;">Email:</td>
    <td style="border: 1px solid #ddd; padding: 12px;"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; background-color: #f5f5f5;">Rating:</td>
    <td style="border: 1px solid #ddd; padding: 12px;">
      <span style="font-size: 18px; color: #FFD700;">${ratingStars}</span>
      <span style="margin-left: 10px;">${rating}/5 stars</span>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; background-color: #f5f5f5;">Allow Testimonial:</td>
    <td style="border: 1px solid #ddd; padding: 12px;">
      <span style="color: ${allowTestimonial ? '#4CAF50' : '#666'}; font-weight: bold;">
        ${allowTestimonial ? '✓ Yes' : '✗ No'}
      </span>
    </td>
  </tr>
</table>

<h3>Customer Experience:</h3>
<div style="border: 1px solid #ddd; padding: 20px; background-color: #f9f9f9; border-radius: 5px; white-space: pre-wrap; margin-bottom: 20px;">${sanitizedMessage}</div>

${
  allowTestimonial
    ? '<div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50;"><strong>Note:</strong> Customer has allowed this feedback to be used as a testimonial.</div>'
    : ''
}

<hr style="margin: 20px 0;">
<small style="color: #666;">
  <strong>Submitted from:</strong> ${req.headers.origin || 'Unknown'}<br>
  <strong>IP Address:</strong> ${ip}<br>
  <strong>User Agent:</strong> ${req.headers['user-agent'] || 'Unknown'}<br>
  <strong>Timestamp:</strong> ${new Date().toISOString()}
</small>
      `,
    };

    const data = await mg.messages.create(MAILGUN_DOMAIN, messageData);
    console.log(data);
    return res.status(200).json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Error sending feedback. Please try again later.' });
  }
}
