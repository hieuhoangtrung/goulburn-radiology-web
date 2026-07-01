import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import Head from 'next/head';
import { NextPage } from 'next';
import { BUSINESS } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About Us | Goulburn Radiology</title>
      <meta name="description" content="Goulburn Radiology was founded by two experienced sonographers committed to premium diagnostic imaging with personalised patient care in Goulburn NSW." />
    </Head>

    {/* Hero */}
    <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Chip label="Our Practice" sx={{ bgcolor: '#EAEAEA', color: BRAND.dark, fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 2, letterSpacing: '-0.02em' }}>
          About Goulburn Radiology
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 680 }}>
          Family-owned and operated, providing expert diagnostic imaging with advanced technology and compassionate care.
        </Typography>
      </Container>
    </Box>

    {/* Background */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 3 }}>
              Our Background
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.8, mb: 3 }}>
              Goulburn Radiology was founded by two experienced sonographers who saw a need for a premium imaging service that combines subspecialty expertise with high-quality, personalised patient care in a friendly and approachable environment.
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.8, mb: 3 }}>
              At Goulburn Radiology, we go beyond the traditional by offering our patients secure, password-protected electronic copies of their imaging results — giving you access to your images wherever and whenever you need them.
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.8 }}>
              We are committed to delivering high-quality diagnostic imaging with a strong focus on patient safety and comfort. By utilising state-of-the-art equipment and advanced imaging techniques, we significantly reduce radiation exposure while maintaining exceptional image quality.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {[
                { value: '2', label: 'Experienced Sonographers' },
                { value: '4', label: 'Imaging Services' },
                { value: '100%', label: 'Bulk Billed' },
                { value: '🔒', label: 'Secure Electronic Images' },
              ].map(stat => (
                <Grid item xs={6} key={stat.label}>
                  <Box sx={{ p: 3.5, bgcolor: BRAND.light, border: '1px solid #EAEAEA', borderRadius: '10px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '3.2rem', fontWeight: 800, color: BRAND.dark, lineHeight: 1 }}>{stat.value}</Typography>
                    <Typography sx={{ fontSize: '1.4rem', color: BRAND.mid, mt: 0.8 }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Our Commitment */}
    <Box sx={{ bgcolor: BRAND.bg, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 6, textAlign: 'center' }}>
          Our Commitment to You
        </Typography>
        <Grid container spacing={3}>
          {[
            { icon: '🎯', title: 'Subspecialty Expertise', desc: 'Founded by experienced sonographers dedicated to the highest standard of diagnostic imaging.' },
            { icon: '❤️', title: 'Personalised Care', desc: 'We treat every patient as an individual in a friendly, welcoming and approachable environment.' },
            { icon: '💳', title: 'Bulk Billed', desc: 'We accept all referrals where Medicare is applicable — ensuring affordable, accessible care for everyone.' },
            { icon: '🔒', title: 'Electronic Image Delivery', desc: 'Secure, password-protected electronic copies of your images delivered directly to you.' },
            { icon: '🔬', title: 'Advanced Technology', desc: 'State-of-the-art equipment with significantly reduced radiation exposure and exceptional image quality.' },
            { icon: '🏠', title: 'Local & Independent', desc: 'Family-owned and operated in Goulburn — genuinely invested in the health of our community.' },
          ].map(v => (
            <Grid item xs={12} sm={6} md={4} key={v.title}>
              <Box sx={{ p: 4, bgcolor: '#fff', border: '1px solid #EAEAEA', borderRadius: '12px', height: '100%' }}>
                <Box sx={{ fontSize: '3rem', mb: 1.5 }}>{v.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.8rem', color: BRAND.dark, mb: 1.5 }}>{v.title}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: BRAND.mid, lineHeight: 1.65 }}>{v.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Accreditation */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: BRAND.dark, mb: 3 }}>
              Our Standards
            </Typography>
            {BUSINESS.accreditations.map((item: string) => (
              <Box key={item} sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                <CheckCircleOutlineIcon sx={{ color: BRAND.dark, fontSize: '2rem', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62' }}>{item}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 5, bgcolor: BRAND.dark, borderRadius: '14px', color: '#fff', textAlign: 'center' }}>
              <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 1.5 }}>Contact Us</Typography>
              <Typography sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.75)', mb: 3, lineHeight: 1.65 }}>
                Our friendly team is happy to answer any questions about your upcoming appointment.
              </Typography>
              <Button fullWidth variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#fff', color: BRAND.dark, fontSize: '1.6rem', fontWeight: 700, py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: BRAND.light } }}>
                {BUSINESS.phone}
              </Button>
              <Typography sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.55)', mt: 1.5 }}>
                Monday – Friday, 8:30 am – 5:00 pm
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default AboutPage;
