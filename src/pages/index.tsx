import {
  Box, Button, Card, CardContent, Chip, Container, Grid, Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { SERVICES, BUSINESS } from '@src/lib/content';

// Modern healthcare palette — #414D63 used as accent, white/light as base
const C = {
  primary: '#414D63',
  dark: '#1B273A',
  accent: '#2D6A9F',        // bright medical blue for key highlights
  accentLight: '#EBF4FF',   // very light blue tint
  bg: '#FAFBFC',
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

    {/* ─── HERO ──────────────────────────────────────────────────────────── */}
    {/* Light hero with real photo on the right — clean, clinical, modern */}
    <Box sx={{ bgcolor: '#fff', pt: { xs: 7, md: 10 }, pb: { xs: 0, md: 0 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center" sx={{ minHeight: { md: '62vh' } }}>
          {/* Left: Text */}
          <Grid item xs={12} md={6} sx={{ pr: { md: 6 }, pb: { xs: 5, md: 8 } }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: C.accentLight, border: `1px solid #BFDBFE`, borderRadius: '999px', px: 2, py: 0.8, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: C.accent }} />
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 600, color: C.accent }}>Family-owned · Goulburn, NSW</Typography>
            </Box>

            <Typography component="h1" sx={{
              fontSize: { xs: '3.6rem', md: '5rem', lg: '5.6rem' },
              fontWeight: 800, lineHeight: 1.05, color: C.dark,
              letterSpacing: '-0.03em', mb: 3,
            }}>
              Trusted Medical<br />
              <Box component="span" sx={{
                background: `linear-gradient(135deg, ${C.primary} 0%, ${C.accent} 100%)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Imaging
              </Box>{' '}
              <Box component="span" sx={{ color: C.dark }}>in<br />Goulburn</Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: '1.7rem', md: '1.9rem' }, color: C.muted, mb: 4, lineHeight: 1.7, maxWidth: 500 }}>
              High-quality, bulk billed diagnostic imaging. We accept all referrals where Medicare is applicable.
            </Typography>

            {/* Trust badges */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4.5 }}>
              {[
                { icon: <VerifiedIcon sx={{ fontSize: '1.6rem' }} />, label: 'Bulk Billed' },
                { icon: <LocalHospitalIcon sx={{ fontSize: '1.6rem' }} />, label: 'All Medicare Referrals' },
                { icon: <LockIcon sx={{ fontSize: '1.6rem' }} />, label: 'Electronic Images' },
              ].map(b => (
                <Box key={b.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, bgcolor: C.accentLight, color: C.accent, borderRadius: '999px', px: 2, py: 0.8, fontSize: '1.4rem', fontWeight: 600, border: '1px solid #BFDBFE' }}>
                  {b.icon}{b.label}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: C.dark, color: '#fff', fontSize: '1.6rem', fontWeight: 700, px: 4, py: 1.8, borderRadius: '10px', boxShadow: `0 4px 20px rgba(27,39,58,0.25)`, '&:hover': { bgcolor: C.primary, boxShadow: `0 6px 24px rgba(27,39,58,0.35)` } }}>
                {BUSINESS.phone}
              </Button>
              <Button href="/services" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ color: C.primary, borderColor: C.primary, fontSize: '1.6rem', px: 3.5, py: 1.8, borderRadius: '10px', '&:hover': { bgcolor: C.accentLight, borderColor: C.accent } }}>
                Our Services
              </Button>
            </Box>
          </Grid>

          {/* Right: Real practice photo — tall, flush to edges */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }, alignSelf: 'stretch' }}>
            <Box sx={{ position: 'relative', height: '100%', minHeight: 480, borderRadius: '20px 20px 0 0', overflow: 'hidden', ml: 2 }}>
              <Image
                src={BUSINESS.hero.backgroundImage}
                alt="Goulburn Radiology practice"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                priority
              />
              {/* Gradient overlay at bottom for readability */}
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(27,39,58,0.7) 0%, transparent 100%)' }} />
              {/* Floating info card */}
              <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24, bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderRadius: '12px', p: 2.5, display: 'flex', gap: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                {[
                  { val: 'Mon–Fri', sub: '8:30am–5:00pm' },
                  { val: '100%', sub: 'Bulk Billed' },
                  { val: 'NSW', sub: 'Goulburn 2580' },
                ].map(s => (
                  <Box key={s.val} sx={{ flex: 1, textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.6rem', color: C.dark, lineHeight: 1 }}>{s.val}</Typography>
                    <Typography sx={{ fontSize: '1.25rem', color: C.muted, mt: 0.3 }}>{s.sub}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
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
          <Typography sx={{ fontSize: '1.8rem', color: C.muted, maxWidth: 520, mx: 'auto' }}>
            Advanced diagnostic imaging focused on patient safety, comfort and accuracy.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {SERVICES.map((service: import('@src/lib/content').Service) => (
            <Grid item xs={12} sm={6} md={3} key={service.slug}>
              <Card component="a" href={service.comingSoon ? undefined : `/services/${service.slug}`}
                elevation={0}
                sx={{
                  height: '100%', display: 'flex', flexDirection: 'column',
                  textDecoration: 'none', borderRadius: '16px',
                  border: `1px solid ${C.border}`,
                  bgcolor: '#fff',
                  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                  cursor: service.comingSoon ? 'default' : 'pointer',
                  '&:hover': service.comingSoon ? {} : {
                    boxShadow: '0 12px 40px rgba(65,77,99,0.15)',
                    transform: 'translateY(-4px)',
                    borderColor: C.primary,
                  },
                }}>
                {/* Image */}
                <Box sx={{ height: 170, position: 'relative', borderRadius: '16px 16px 0 0', overflow: 'hidden', bgcolor: C.bg }}>
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  {service.comingSoon && (
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(27,39,58,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

    {/* ─── WHY CHOOSE US ─────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip label="About Us" sx={{ bgcolor: C.accentLight, color: C.accent, fontWeight: 700, fontSize: '1.3rem', mb: 2.5, border: '1px solid #BFDBFE' }} />
            <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: C.dark, mb: 3, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Expert Care,<br />Close to Home
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: C.muted, mb: 5, lineHeight: 1.8 }}>
              Founded by two experienced sonographers, Goulburn Radiology combines subspecialty expertise with warm, personalised care in a friendly environment.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {BUSINESS.whyUs.map((item: { title: string; desc: string }) => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: '8px', bgcolor: C.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

          {/* Stats grid */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2.5}>
              {BUSINESS.stats.map((stat: { value: string; label: string }, i: number) => (
                <Grid item xs={6} key={stat.value}>
                  <Box sx={{
                    p: 4, borderRadius: '16px', textAlign: 'center',
                    bgcolor: i % 2 === 0 ? C.dark : C.primary,
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(27,39,58,0.15)',
                  }}>
                    <Typography sx={{ fontSize: '4.4rem', fontWeight: 800, lineHeight: 1, color: '#fff' }}>{stat.value}</Typography>
                    <Typography sx={{ fontSize: '1.45rem', color: 'rgba(255,255,255,0.75)', mt: 1 }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ─── FEATURE STRIP ─────────────────────────────────────────────────── */}
    <Box sx={{ bgcolor: C.bg, py: { xs: 7, md: 9 }, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: '🔒', title: 'Secure Electronic Images', desc: 'Password-protected copies delivered directly to you.' },
            { icon: '💳', title: 'Bulk Billed', desc: 'All eligible services bulk billed with a Medicare referral.' },
            { icon: '📞', title: 'Easy Booking', desc: 'Call us Mon–Fri 8:30am–5:00pm on ' + BUSINESS.phone },
            { icon: '🏠', title: 'Family-Owned', desc: 'Independent practice focused on your community.' },
          ].map(f => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ fontSize: '3.5rem', mb: 1.5 }}>{f.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: C.dark, mb: 1 }}>{f.title}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: C.muted, lineHeight: 1.65 }}>{f.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* ─── CTA ───────────────────────────────────────────────────────────── */}
    <Box sx={{
      py: { xs: 9, md: 12 },
      background: `linear-gradient(135deg, ${C.dark} 0%, ${C.primary} 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle background pattern */}
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
            sx={{ bgcolor: '#fff', color: C.dark, fontSize: '1.7rem', fontWeight: 800, px: 5, py: 2, borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', '&:hover': { bgcolor: '#F0F4FF' } }}>
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
