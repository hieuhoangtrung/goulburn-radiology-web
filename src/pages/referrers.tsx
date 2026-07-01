import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import Head from 'next/head';
import { NextPage } from 'next';

import { REFERRER_INFO, BUSINESS } from '@src/lib/content';

const ReferrersPage: NextPage = () => (
  <>
    <Head>
      <title>For Referrers | Goulburn Radiology</title>
      <meta name="description" content="Referring doctors and specialists: fast reporting, direct radiologist access, secure results delivery. Goulburn Radiology — your imaging partner in Southern NSW." />
    </Head>

    {/* Hero */}
    <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Chip label="For Healthcare Professionals" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
          Referral Information
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 700 }}>
          {REFERRER_INFO.intro}
        </Typography>
      </Container>
    </Box>

    {/* Contact methods */}
    <Box sx={{ bgcolor: '#0B4F82', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: <PhoneIcon sx={{ fontSize: '2.4rem' }} />, label: 'Phone', value: BUSINESS.phone, href: `tel:${BUSINESS.phone.replace(/\s/g, '')}` },
            { icon: <FaxIcon sx={{ fontSize: '2.4rem' }} />, label: 'Fax', value: BUSINESS.fax, href: undefined },
            { icon: <EmailIcon sx={{ fontSize: '2.4rem' }} />, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
          ].map((item: { icon: JSX.Element; label: string; value: string; href?: string }) => (
            <Grid item xs={12} sm={4} key={item.label}>
              <Box sx={{ textAlign: 'center', color: '#fff' }}>
                <Box sx={{ color: '#4A90D9', mb: 1 }}>{item.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#9AC8F0', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.5 }}>{item.label}</Typography>
                {item.href ? (
                  <a href={item.href} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.8rem', fontWeight: 600 }}>{item.value}</a>
                ) : (
                  <Typography sx={{ fontSize: '1.8rem', fontWeight: 600 }}>{item.value}</Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Features */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.2rem' }, fontWeight: 800, color: '#0B2747', mb: 6, textAlign: 'center' }}>
          Why Refer to Goulburn Radiology?
        </Typography>
        <Grid container spacing={3}>
          {REFERRER_INFO.features.map((f: { title: string; desc: string; icon: string }) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <Box sx={{ p: 4, bgcolor: '#F7FAFD', border: '1px solid #E2EAF4', borderRadius: '14px', height: '100%' }}>
                <Box sx={{ fontSize: '3rem', mb: 1.5 }}>{f.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.8rem', color: '#0B2747', mb: 1.5 }}>{f.title}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', lineHeight: 1.65 }}>{f.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* How to refer */}
    <Box sx={{ bgcolor: '#F7FAFD', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: '#0B2747', mb: 4 }}>
              How to Refer
            </Typography>
            {[
              { step: '1', title: 'Write a referral', desc: 'Use your practice management system, our referral form, or a standard letter including the patient details and clinical indication.' },
              { step: '2', title: 'Send or give to patient', desc: 'Submit electronically via Argus/Medical Objects, fax to (02) 4822 5600, or hand the referral to your patient to bring to us.' },
              { step: '3', title: 'Patient books', desc: 'The patient calls us on (02) 4821 5733 or walks in. We will handle preparation instructions and scheduling.' },
              { step: '4', title: 'Receive your report', desc: 'Reports are delivered to your nominated contact method within 24–48 hours. Urgent results are communicated immediately.' },
            ].map((s: { step: string; title: string; desc: string }) => (
              <Box key={s.step} sx={{ display: 'flex', gap: 2.5, mb: 3.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#0B4F82',
                    color: '#fff',
                    fontSize: '1.7rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {s.step}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 0.5 }}>{s.title}</Typography>
                  <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', lineHeight: 1.6 }}>{s.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: '#0B2747', mb: 4 }}>
              Download Forms
            </Typography>
            {REFERRER_INFO.downloadForms.map((form: { label: string; href: string }) => (
              <Box
                key={form.label}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3, bgcolor: '#fff', border: '1px solid #E2EAF4', borderRadius: '10px', mb: 2 }}
              >
                <Typography sx={{ fontSize: '1.6rem', color: '#0B2747', fontWeight: 600 }}>{form.label}</Typography>
                <Button
                  href={form.href}
                  startIcon={<DownloadIcon />}
                  variant="outlined"
                  size="small"
                  sx={{ color: '#0B4F82', borderColor: '#0B4F82', fontSize: '1.4rem' }}
                >
                  Download
                </Button>
              </Box>
            ))}

            <Box sx={{ mt: 5, p: 4, bgcolor: '#EEF6FF', borderRadius: '14px', border: '1px solid #C5DEFF' }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 1.5 }}>Speak to a Radiologist</Typography>
              <Typography sx={{ fontSize: '1.5rem', color: '#3A4E62', mb: 3, lineHeight: 1.65 }}>
                Our radiologists are available for direct clinician-to-clinician consultation. Call reception and we will connect you.
              </Typography>
              <Button
                variant="contained"
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#0B4F82', fontSize: '1.5rem', px: 3, py: 1.5, borderRadius: '8px' }}
              >
                {BUSINESS.phone}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default ReferrersPage;
