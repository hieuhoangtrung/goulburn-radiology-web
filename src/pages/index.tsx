import {
  Box, Button, Card, CardContent, Chip, Container, Grid, Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { SERVICES, BUSINESS } from '@src/lib/content';

const C = {
  dark: '#1B273A',
  primary: '#414D63',
  accent: '#2D6A9F',
  accentLight: '#EBF4FF',
  bg: '#F8FAFC',
  border: '#E8EDF2',
  text: '#2C3E50',
  muted: '#64748B',
};

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Goulburn Radiology | Affordable Bulk Billed Medical Imaging in Goulburn NSW</title>
      <meta name="description" content="Family-owned Goulburn Radiology offers high-quality, bulk billed medical imaging — X-Ray, Ultrasound and more. We accept all Medicare referrals. Call 02 4821 4666." />
    </Head>

    {/* ─── HERO: Full-width photo background ──────────────────────────── */}
    <Box sx={{ position: 'relative', minHeight: { xs: '70vh', md: '80vh' }, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background photo */}
      <Image
        src={BUSINESS.hero.backgroundImage}
        alt="Goulburn Radiology"
        layout="fill"
        objectFit="cover"
        objectPosition="center 30%"
        priority
      />
      {/* Dark gradient overlay — left heavier, right lighter for visual interest */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(27,39,58,0.88) 0%, rgba(27,39,58,0.75) 50%, rgba(27,39,58,0.45) 100%)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            {/* Tag */}
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,255,255,0.12)', borderRadius: '999px', px: 2, py: 0.8, mb: 3, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#60A5FA' }} />
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Family-owned · Goulburn, NSW</Typography>
            </Box>

            <Typography component="h1" sx={{
              fontSize: { xs: '3.8rem', md: '5.2rem', lg: '5.8rem' },
              fontWeight: 800, lineHeight: 1.08, color: '#fff',
              letterSpacing: '-0.03em', mb: 3,
            }}>
              Trusted Medical<br />
              Imaging, Bulk<br />
              Billed in Goulburn
            </Typography>

            <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, color: 'rgba(255,255,255,0.82)', mb: 4.5, lineHeight: 1.7, maxWidth: 480 }}>
              High-quality diagnostic imaging, accepted where Medicare is applicable. No out-of-pocket costs for eligible patients.
            </Typography>

            {/* Trust badges */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 5 }}>
              {[
                { icon: <VerifiedIcon sx={{ fontSize: '1.6rem' }} />, label: 'Bulk Billed' },
                { icon: <CheckCircleOutlineIcon sx={{ fontSize: '1.6rem' }} />, label: 'All Medicare Referrals' },
                { icon: <LockIcon sx={{ fontSize: '1.6rem' }} />, label: 'Secure Electronic Images' },
              ].map(b => (
                <Box key={b.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, bgcolor: 'rgba(255,255,255,0.13)', color: '#fff', borderRadius: '999px', px: 2, py: 0.8, fontSize: '1.4rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}>
                  {b.icon}{b.label}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#fff', color: C.dark, fontSize: '1.65rem', fontWeight: 800, px: 4.5, py: 2, borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)', '&:hover': { bgcolor: '#F0F4FF', transform: 'translateY(-1px)', boxShadow: '0 6px 28px rgba(0,0,0,0.35)' }, transition: 'all 0.2s' }}>
                {BUSINESS.phone}
              </Button>
              <Button href="/services" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.55)', borderWidth: 2, fontSize: '1.65rem', px: 4, py: 2, borderRadius: '10px', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.12)', borderWidth: 2 }, transition: 'all 0.2s' }}>
                Our Services
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom info bar */}
        <Box sx={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: { xs: 'none', md: 'block' },
        }}>
          <Container maxWidth="lg">
            <Box sx={{
              display: 'flex', gap: 0,
              bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)',
              borderRadius: '12px 12px 0 0',
              overflow: 'hidden',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
              mx: { lg: 0 },
            }}>
              {[
                { icon: '🕐', label: 'Opening Hours', value: 'Mon–Fri 8:30am–5:00pm' },
                { icon: '📍', label: 'Location', value: 'Goulburn NSW 2580' },
                { icon: '💳', label: 'Bulk Billed', value: 'All eligible Medicare referrals' },
                { icon: '📞', label: 'Book by Phone', value: BUSINESS.phone },
              ].map((item, i) => (
                <Box key={item.label} sx={{
                  flex: 1, px: 3, py: 2.5,
                  borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
                  display: 'flex', alignItems: 'center', gap: 1.8,
                }}>
                  <Box sx={{ fontSize: '2.2rem', flexShrink: 0 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontSize: '1.25rem', color: C.muted, fontWeight: 500, lineHeight: 1 }}>{item.label}</Typography>
                    <Typography sx={{ fontSize: '1.5rem', color: C.dark, fontWeight: 700, mt: 0.3 }}>{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>

    {/* ─── SERVICES ──────────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: C.bg, py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip label="What We Offer" sx={{ bgcolor: C.accentLight, color: C.accent, fontWeight: 700, fontSize: '1.3rem', mb: 2, border: '1px solid #BFDBFE' }} />
          <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.8rem' }, fontWeight: 800, color: C.dark, mb: 2, letterSpacing: '-0.02em' }}>
            Our Imaging Services
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: C.muted, maxWidth: 520, mx: 'auto', lineHeight: 1.65 }}>
            Advanced diagnostic imaging with a strong focus on patient safety, comfort and accuracy.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {SERVICES.map((service: import('@src/lib/content').Service) => (
            <Grid item xs={12} sm={6} md={3} key={service.slug}>
              <Card
                component={service.comingSoon ? 'div' : 'a'}
                href={service.comingSoon ? undefined : `/services/${service.slug}`}
                elevation={0}
                sx={{
                  height: '100%', display: 'flex', flexDirection: 'column',
                  textDecoration: 'none', borderRadius: '16px',
                  border: `1px solid ${C.border}`, bgcolor: '#fff',
                  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                  cursor: service.comingSoon ? 'default' : 'pointer',
                  '&:hover': service.comingSoon ? {} : {
                    boxShadow: '0 12px 40px rgba(65,77,99,0.15)',
                    transform: 'translateY(-4px)',
                    borderColor: C.primary,
                  },
                }}>
                <Box sx={{ height: 170, position: 'relative', borderRadius: '16px 16px 0 0', overflow: 'hidden', bgcolor: C.bg }}>
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  {service.comingSoon && (
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(27,39,58,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Chip label="Coming Soon" sx={{ bgcolor: '#fff', color: C.dark, fontWeight: 700, fontSize: '1.3rem' }} />
                    </Box>
                  )}
                </Box>
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', color: C.dark, mb: 1 }}>{service.title}</Typography>
                  <Typography sx={{ fontSize: '1.45rem', color: C.muted, lineHeight: 1.65, flex: 1 }}>{service.shortDesc}</Typography>
                  {!service.comingSoon && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2.5 }}>
                      {service.bulkBilled && (
                        <Chip label="Bulk Billed" size="small" sx={{ bgcolor: '#DCFCE7', color: '#15803D', fontWeight: 700, fontSize: '1.2rem' }} />
                      )}
                      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.5, color: C.primary, fontWeight: 700, fontSize: '1.4rem' }}>
                        Learn more <ArrowForwardIcon sx={{ fontSize: '1.5rem' }} />
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ─── WHY US ────────────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Real image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: { xs: 280, md: 460 }, boxShadow: '0 20px 60px rgba(27,39,58,0.18)' }}>
              <Image
                src={(BUSINESS as any).sectionImage2 || BUSINESS.aboutImage}
                alt="Medical imaging at Goulburn Radiology"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Chip label="About Us" sx={{ bgcolor: C.accentLight, color: C.accent, fontWeight: 700, fontSize: '1.3rem', mb: 2.5, border: '1px solid #BFDBFE' }} />
            <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: C.dark, mb: 3, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Expert Care,<br />Close to Home
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: C.muted, mb: 5, lineHeight: 1.8 }}>
              Founded by two experienced sonographers, Goulburn Radiology combines subspecialty expertise with warm, personalised care in a friendly and approachable environment.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {BUSINESS.whyUs.map((item: { title: string; desc: string }) => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: '8px', bgcolor: C.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.3 }}>
                    <CheckCircleOutlineIcon sx={{ color: C.accent, fontSize: '2rem' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: C.dark, mb: 0.3 }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '1.5rem', color: C.muted, lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Button href="/about" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ mt: 4.5, bgcolor: C.dark, fontSize: '1.5rem', px: 4, py: 1.6, borderRadius: '10px', '&:hover': { bgcolor: C.primary } }}>
              About Our Practice
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ─── STATS ─────────────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: C.dark, py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {BUSINESS.stats.map((stat: { value: string; label: string }) => (
            <Grid item xs={6} md={3} key={stat.value}>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography sx={{ fontSize: { xs: '4rem', md: '5rem' }, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.65)', mt: 1 }}>{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ─── FEATURE STRIP ─────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: C.bg, py: { xs: 7, md: 9 }, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: '🔒', title: 'Secure Electronic Images', desc: 'Password-protected copies of your results delivered directly to you.' },
            { icon: '💳', title: 'Bulk Billed', desc: 'All eligible services bulk billed with a valid Medicare referral.' },
            { icon: '📞', title: 'Easy Booking', desc: `Call ${BUSINESS.phone} Mon–Fri 8:30am–5:00pm to book.` },
            { icon: '🏠', title: 'Family-Owned', desc: 'Independent Goulburn practice genuinely invested in your community.' },
          ].map(f => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <Box sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
                <Box sx={{ fontSize: '3.6rem', mb: 2 }}>{f.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: C.dark, mb: 1 }}>{f.title}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: C.muted, lineHeight: 1.65 }}>{f.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ─── CTA ───────────────────────────────────────────────────────────── */}
    <Box sx={{ position: 'relative', py: { xs: 9, md: 12 }, overflow: 'hidden' }}>
      <Image
        src={(BUSINESS as any).sectionImage1 || BUSINESS.hero.backgroundImage}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center 40%"
      />
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(27,39,58,0.82)' }} />
      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography component="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em' }}>
          Ready to Book Your Appointment?
        </Typography>
        <Typography sx={{ fontSize: '1.9rem', color: 'rgba(255,255,255,0.78)', mb: 5, maxWidth: 540, mx: 'auto', lineHeight: 1.65 }}>
          We accept all referrals where Medicare is applicable. Call us during business hours.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
          <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: '#fff', color: C.dark, fontSize: '1.7rem', fontWeight: 800, px: 5, py: 2, borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', '&:hover': { bgcolor: '#F0F4FF' } }}>
            {BUSINESS.phone}
          </Button>
          <Button href="/patient-information" variant="outlined" size="large"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.55)', borderWidth: 2, fontSize: '1.7rem', px: 5, py: 2, borderRadius: '10px', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)', borderWidth: 2 } }}>
            Patient Information
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default HomePage;
