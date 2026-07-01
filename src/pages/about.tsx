import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

import Image from 'next/image';
import { TEAM, BUSINESS } from '@src/lib/content';

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About Us | Goulburn Radiology</title>
      <meta name="description" content="Learn about Goulburn Radiology — our history, values, fellowship-trained radiologists and commitment to the Goulburn community since 1985." />
    </Head>

    {/* Hero */}
    <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Chip label="Our Practice" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
          About Goulburn Radiology
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 680 }}>
          Serving the Goulburn community and Southern Tablelands since 1985 with expert diagnostic imaging and compassionate patient care.
        </Typography>
      </Container>
    </Box>

    {/* Our Story */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.4rem' }, fontWeight: 800, color: '#0B2747', mb: 3, letterSpacing: '-0.02em' }}>
              Our Story
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.75, mb: 3 }}>
              Goulburn Radiology was established in 1985 to provide the Goulburn region with access to high-quality diagnostic imaging without the need to travel to Sydney or Canberra.
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.75, mb: 3 }}>
              Over four decades, we have grown into a multi-subspecialty practice with fellowship-trained radiologists, modern imaging equipment and a dedicated team of radiographers, nurses and administrative staff.
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.75 }}>
              We are proud to be an independent, locally-owned practice committed to providing the same standard of care you would find at a major metropolitan radiology centre — right here in Goulburn.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                { value: '1985', label: 'Year Founded' },
                { value: '35+', label: 'Years of Service' },
                { value: '4', label: 'Radiologists' },
                { value: '8', label: 'Imaging Modalities' },
                { value: '24h', label: 'Report Turnaround' },
                { value: '100%', label: 'Independent & Local' },
              ].map(stat => (
                <Grid item xs={6} key={stat.value}>
                  <Box sx={{ p: 3.5, bgcolor: '#F7FAFD', border: '1px solid #E2EAF4', borderRadius: '12px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '3.5rem', fontWeight: 800, color: '#0B4F82', lineHeight: 1 }}>{stat.value}</Typography>
                    <Typography sx={{ fontSize: '1.4rem', color: '#5A6E84', mt: 0.8 }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Values */}
    <Box sx={{ bgcolor: '#F7FAFD', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.4rem' }, fontWeight: 800, color: '#0B2747', mb: 2 }}>
            Our Values
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[
            { icon: '🎯', title: 'Accuracy', desc: 'We are committed to precise, reliable reporting. Our subspecialty-trained radiologists apply rigorous attention to detail on every study.' },
            { icon: '❤️', title: 'Compassion', desc: 'We understand that medical imaging can be stressful. Our friendly team creates a calm, welcoming environment for every patient.' },
            { icon: '⚡', title: 'Efficiency', desc: 'We respect your time. Minimal waiting, prompt appointments, and rapid reporting ensure you get answers quickly.' },
            { icon: '🔬', title: 'Innovation', desc: 'We invest in modern technology to deliver the highest image quality with the lowest possible radiation dose.' },
            { icon: '🤝', title: 'Collaboration', desc: 'We work closely with referring doctors to ensure seamless, integrated patient care across the Southern Tablelands.' },
            { icon: '🌏', title: 'Community', desc: 'As a locally-owned practice, we are deeply invested in the health and wellbeing of the Goulburn community.' },
          ].map(v => (
            <Grid item xs={12} sm={6} md={4} key={v.title}>
              <Box sx={{ p: 4, bgcolor: '#fff', border: '1px solid #E2EAF4', borderRadius: '14px', height: '100%' }}>
                <Box sx={{ fontSize: '3rem', mb: 1.5 }}>{v.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.8rem', color: '#0B2747', mb: 1.5 }}>{v.title}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', lineHeight: 1.65 }}>{v.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Team */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.4rem' }, fontWeight: 800, color: '#0B2747', mb: 2 }}>
            Meet Our Radiologists
          </Typography>
          <Typography sx={{ fontSize: '1.7rem', color: '#5A6E84', maxWidth: 600, mx: 'auto' }}>
            Our team of fellowship-trained radiologists brings subspecialty expertise across all imaging modalities.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {TEAM.map(member => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Box sx={{ p: 4, bgcolor: '#F7FAFD', borderRadius: '16px', border: '1px solid #E2EAF4', height: '100%', textAlign: 'center' }}>
                <Box sx={{ width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', mx: 'auto', mb: 2.5, boxShadow: '0 4px 20px rgba(11,79,130,0.2)', position: 'relative', flexShrink: 0 }}>
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', color: '#0B2747', mb: 0.5 }}>{member.name}</Typography>
                <Typography sx={{ fontSize: '1.3rem', color: '#0B4F82', fontWeight: 600, mb: 2 }}>{member.role}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography sx={{ fontSize: '1.45rem', color: '#5A6E84', lineHeight: 1.65 }}>{member.bio}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Accreditation */}
    <Box sx={{ bgcolor: '#F7FAFD', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: '#0B2747', mb: 3 }}>
              Accreditation & Standards
            </Typography>
            {[
              'Accredited by the Royal Australian and New Zealand College of Radiologists (RANZCR)',
              'Medicare-registered provider for bulk-billed services',
              'Radiation safety compliant with ARPANSA standards',
              'Quality management system aligned with ISO 9001',
              'BreastScreen-affiliated for mammography screening',
            ].map(item => (
              <Box key={item} sx={{ display: 'flex', gap: 1.5, mb: 1.8 }}>
                <CheckCircleOutlineIcon sx={{ color: '#0B4F82', fontSize: '2.2rem', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62' }}>{item}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <Box sx={{ p: 5, bgcolor: '#0B4F82', borderRadius: '16px', color: '#fff' }}>
              <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 1 }}>Questions?</Typography>
              <Typography sx={{ fontSize: '1.5rem', color: '#C8D8EB', mb: 3 }}>
                Our friendly team is happy to answer any questions about our practice or your upcoming appointment.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#fff', color: '#0B4F82', fontSize: '1.6rem', fontWeight: 700, py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: '#e8f0fe' } }}
              >
                {BUSINESS.phone}
              </Button>
              <Button
                component={Link}
                href="/contact"
                fullWidth
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 1.5, color: '#fff', borderColor: 'rgba(255,255,255,0.4)', fontSize: '1.5rem', py: 1.5, borderRadius: '8px', '&:hover': { borderColor: '#fff' } }}
              >
                Send a Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default AboutPage;
