import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PrintIcon from '@mui/icons-material/Print';
import Head from 'next/head';
import { NextPage } from 'next';
import { useState, FormEvent } from 'react';

import { BUSINESS } from '@src/lib/content';

const ContactPage: NextPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Goulburn Radiology</title>
        <meta name="description" content="Contact Goulburn Radiology — phone, fax, email and location details. 135 Sloane Street, Goulburn NSW 2580. Call (02) 4821 5733." />
      </Head>

      {/* Hero */}
      <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Chip label="Get in Touch" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
          <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 600 }}>
            We&apos;re here to help. Call us to book an appointment or use the form below to send an enquiry.
          </Typography>
        </Container>
      </Box>

      {/* Contact content */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left: info */}
            <Grid item xs={12} md={5}>
              <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B2747', mb: 4 }}>
                Practice Information
              </Typography>

              {[
                { icon: <LocationOnIcon sx={{ color: '#0B4F82' }} />, title: 'Address', content: [`${BUSINESS.addressStreet}`, `${BUSINESS.addressLocality} ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`, 'Free on-site parking available'] },
                { icon: <PhoneIcon sx={{ color: '#0B4F82' }} />, title: 'Phone', content: [BUSINESS.phone] },
                { icon: <PrintIcon sx={{ color: '#0B4F82' }} />, title: 'Fax', content: [BUSINESS.fax] },
                { icon: <EmailIcon sx={{ color: '#0B4F82' }} />, title: 'Email', content: [BUSINESS.email] },
              ].map(item => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2, mb: 3.5 }}>
                  <Box sx={{ flexShrink: 0, mt: 0.3 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747', mb: 0.5 }}>{item.title}</Typography>
                    {item.content.map(line => (
                      <Typography key={line} sx={{ fontSize: '1.5rem', color: '#5A6E84' }}>{line}</Typography>
                    ))}
                  </Box>
                </Box>
              ))}

              <Divider sx={{ my: 4 }} />

              <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                <AccessTimeIcon sx={{ color: '#0B4F82', flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747', mb: 1.5 }}>Opening Hours</Typography>
                  {BUSINESS.hours.map(h => (
                    <Box key={h.days} sx={{ display: 'flex', justifyContent: 'space-between', gap: 4, mb: 1 }}>
                      <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84' }}>{h.days}</Typography>
                      <Typography sx={{ fontSize: '1.5rem', color: '#0B2747', fontWeight: 600 }}>{h.hours}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Map */}
              <Box sx={{ mt: 4, borderRadius: '12px', overflow: 'hidden', border: '1px solid #E2EAF4', height: 220 }}>
                <iframe
                  title="Goulburn Radiology location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=135+Sloane+Street+Goulburn+NSW+2580&output=embed`}
                />
              </Box>
            </Grid>

            {/* Right: contact form */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: '#F7FAFD', borderRadius: '16px', border: '1px solid #E2EAF4' }}>
                <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B2747', mb: 1 }}>
                  Send an Enquiry
                </Typography>
                <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', mb: 4 }}>
                  For appointment bookings please call us directly. Use this form for general enquiries.
                </Typography>

                {status === 'success' ? (
                  <Alert severity="success" sx={{ fontSize: '1.6rem', borderRadius: '10px' }}>
                    Thank you for your message. We will get back to you within one business day.
                  </Alert>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          label="Full Name"
                          value={form.name}
                          onChange={handleChange('name')}
                          sx={{ bgcolor: '#fff' }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          type="email"
                          label="Email Address"
                          value={form.email}
                          onChange={handleChange('email')}
                          sx={{ bgcolor: '#fff' }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          sx={{ bgcolor: '#fff' }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Subject"
                          value={form.subject}
                          onChange={handleChange('subject')}
                          sx={{ bgcolor: '#fff' }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          multiline
                          rows={5}
                          label="Message"
                          value={form.message}
                          onChange={handleChange('message')}
                          sx={{ bgcolor: '#fff' }}
                        />
                      </Grid>
                    </Grid>

                    {status === 'error' && (
                      <Alert severity="error" sx={{ mt: 2.5, fontSize: '1.5rem', borderRadius: '10px' }}>
                        Something went wrong. Please try again or call us directly.
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={status === 'loading'}
                      sx={{ mt: 3, bgcolor: '#0B4F82', fontSize: '1.6rem', px: 5, py: 1.8, borderRadius: '10px', '&:hover': { bgcolor: '#0a3d64' } }}
                    >
                      {status === 'loading' ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : 'Send Message'}
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
