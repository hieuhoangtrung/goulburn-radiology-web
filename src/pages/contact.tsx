import {
  Alert, Box, Button, Chip, CircularProgress, Container,
  Grid, MenuItem, TextField, Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Head from 'next/head';
import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import { BUSINESS } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const SUBJECTS = [
  'General Enquiry',
  'Book an Appointment',
  'X-Ray / OPG',
  'Ultrasound',
  'CT Scanning (Coming Soon)',
  'Mammogram (Coming Soon)',
  'Referral Information',
  'Results / Report Query',
  'Other',
];

const ContactPage: NextPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please call us directly on ' + BUSINESS.phone);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Goulburn Radiology</title>
        <meta name="description" content={`Contact Goulburn Radiology in Goulburn NSW. Call ${BUSINESS.phone} — Mon–Fri 8:30am–5:00pm. Send us an online enquiry.`} />
      </Head>

      {/* Hero */}
      <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Chip label="Get in Touch" sx={{ bgcolor: '#EAEAEA', color: BRAND.dark, fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
          <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 620 }}>
            We would love to hear from you. Call us or send an enquiry and we will get back to you as soon as possible.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 4 }}>
                Contact Information
              </Typography>

              {[
                {
                  icon: <PhoneIcon sx={{ fontSize: '2.2rem', color: BRAND.dark }} />,
                  title: 'Phone',
                  content: <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} style={{ color: BRAND.dark, textDecoration: 'none', fontWeight: 700, fontSize: '1.7rem' }}>{BUSINESS.phone}</a>,
                },
                {
                  icon: <AccessTimeIcon sx={{ fontSize: '2.2rem', color: BRAND.dark }} />,
                  title: 'Opening Hours',
                  content: (
                    <Box>
                      {BUSINESS.hours.map((h: { days: string; hours: string }) => (
                        <Box key={h.days} sx={{ mb: 0.8 }}>
                          <Box component="span" sx={{ fontSize: '1.5rem', color: BRAND.mid }}>{h.days}: </Box>
                          <Box component="span" sx={{ fontSize: '1.5rem', color: BRAND.dark, fontWeight: 700 }}>{h.hours}</Box>
                        </Box>
                      ))}
                    </Box>
                  ),
                },
                {
                  icon: <LocationOnIcon sx={{ fontSize: '2.2rem', color: BRAND.dark }} />,
                  title: 'Location',
                  content: <Typography sx={{ fontSize: '1.5rem', color: BRAND.mid }}>{BUSINESS.addressLocality} {BUSINESS.addressRegion} {BUSINESS.postalCode}</Typography>,
                },
              ].map(item => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Box sx={{ flexShrink: 0, mt: 0.3 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: BRAND.dark, mb: 0.5 }}>{item.title}</Typography>
                    {item.content}
                  </Box>
                </Box>
              ))}

              {/* Book by phone CTA */}
              <Box sx={{ p: 3.5, bgcolor: BRAND.dark, borderRadius: '12px', color: '#fff', mt: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', mb: 1 }}>Book an Appointment</Typography>
                <Typography sx={{ fontSize: '1.45rem', color: 'rgba(255,255,255,0.75)', mb: 2.5, lineHeight: 1.65 }}>
                  To book, please call us during business hours. Our staff will provide preparation instructions at the time of booking.
                </Typography>
                <Button fullWidth href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: '#fff', color: BRAND.dark, fontWeight: 700, fontSize: '1.6rem', py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: BRAND.light } }}>
                  {BUSINESS.phone}
                </Button>
              </Box>
            </Grid>

            {/* Enquiry Form */}
            <Grid item xs={12} md={8}>
              <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 1 }}>
                Send an Enquiry
              </Typography>
              <Typography sx={{ fontSize: '1.6rem', color: BRAND.mid, mb: 4 }}>
                Fill in the form below and we will get back to you as soon as possible.
              </Typography>

              {status === 'success' && (
                <Alert severity="success" sx={{ mb: 3, fontSize: '1.6rem' }}>
                  Thank you for your enquiry! We will be in touch shortly.
                </Alert>
              )}
              {status === 'error' && (
                <Alert severity="error" sx={{ mb: 3, fontSize: '1.6rem' }}>
                  {errorMsg}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name *" fullWidth value={form.name}
                      onChange={set('name')} required disabled={status === 'loading'}
                      InputProps={{ sx: { fontSize: '1.6rem' } }}
                      InputLabelProps={{ sx: { fontSize: '1.5rem' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address *" type="email" fullWidth value={form.email}
                      onChange={set('email')} required disabled={status === 'loading'}
                      InputProps={{ sx: { fontSize: '1.6rem' } }}
                      InputLabelProps={{ sx: { fontSize: '1.5rem' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number" fullWidth value={form.phone}
                      onChange={set('phone')} disabled={status === 'loading'}
                      InputProps={{ sx: { fontSize: '1.6rem' } }}
                      InputLabelProps={{ sx: { fontSize: '1.5rem' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Subject" select fullWidth value={form.subject}
                      onChange={set('subject')} disabled={status === 'loading'}
                      InputProps={{ sx: { fontSize: '1.6rem' } }}
                      InputLabelProps={{ sx: { fontSize: '1.5rem' } }}
                    >
                      {SUBJECTS.map(s => (
                        <MenuItem key={s} value={s} sx={{ fontSize: '1.5rem' }}>{s}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message *" multiline rows={6} fullWidth value={form.message}
                      onChange={set('message')} required disabled={status === 'loading'}
                      placeholder="Please describe your enquiry..."
                      InputProps={{ sx: { fontSize: '1.6rem' } }}
                      InputLabelProps={{ sx: { fontSize: '1.5rem' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" disabled={status === 'loading'}
                      sx={{ bgcolor: BRAND.dark, fontSize: '1.6rem', fontWeight: 700, px: 5, py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: BRAND.mid } }}>
                      {status === 'loading' ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : 'Send Enquiry'}
                    </Button>
                    <Typography sx={{ display: 'inline', ml: 2, fontSize: '1.4rem', color: BRAND.mid }}>
                      Or call us on <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} style={{ color: BRAND.dark, fontWeight: 700 }}>{BUSINESS.phone}</a>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
