import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Head from 'next/head';

import { NextPage } from 'next';

import Image from 'next/image';
import { SERVICES, BUSINESS, META, TEAM } from '@src/lib/content';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Goulburn Radiology | Expert Medical Imaging in Goulburn NSW</title>
        <meta
          name="description"
          content="Goulburn Radiology offers X-Ray, MRI, CT, Ultrasound, DEXA and more in Goulburn NSW. Bulk billing available. Open Mon–Sat. Call (02) 4821 5733."
        />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0B2747 0%, #0B4F82 55%, #1A6FAD 100%)',
          color: '#fff',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box sx={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.04)' }} />
        <Box sx={{ position: 'absolute', bottom: -120, left: -60, width: 500, height: 500, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.03)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip label="Serving Goulburn since 1985" sx={{ bgcolor: 'rgba(74,144,217,0.25)', color: '#9AC8F0', fontWeight: 600, mb: 2.5, fontSize: '1.3rem' }} />
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '3.6rem', md: '5rem', lg: '5.8rem' },
                  fontWeight: 800,
                  lineHeight: 1.08,
                  mb: 3,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                Expert Medical<br />
                Imaging in<br />
                <Box component="span" sx={{ color: '#4A90D9' }}>Goulburn, NSW</Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, color: '#C8D8EB', mb: 4, lineHeight: 1.6, maxWidth: 580 }}>
                Fellowship-trained radiologists providing high-quality diagnostic imaging for the Southern Tablelands. Bulk billing available on eligible services.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {['Bulk Billing Available', 'Same-Day Reports', 'No Long Waits', 'Digital Results'].map(tag => (
                  <Box key={tag} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#9AC8F0', fontSize: '1.5rem' }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: '1.8rem', color: '#4A90D9' }} />
                    {tag}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: '#fff',
                    color: '#0B4F82',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    px: 4,
                    py: 1.8,
                    borderRadius: '10px',
                    '&:hover': { bgcolor: '#e8f0fe' },
                  }}
                >
                  {BUSINESS.phone}
                </Button>
                <Button
                  href="/services"
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.4)',
                    fontSize: '1.6rem',
                    px: 4,
                    py: 1.8,
                    borderRadius: '10px',
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Grid>

            {/* Info cards */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { icon: <AccessTimeIcon />, title: 'Opening Hours', lines: ['Mon–Fri: 8:00am – 5:30pm', 'Saturday: 8:30am – 12:30pm', 'Sunday: Closed'] },
                  { icon: <LocationOnIcon />, title: 'Location', lines: [BUSINESS.addressStreet, `${BUSINESS.addressLocality} ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`, 'Free parking available'] },
                  { icon: <PhoneIcon />, title: 'Contact Us', lines: [BUSINESS.phone, BUSINESS.email, 'Fax: ' + BUSINESS.fax] },
                ].map(card => (
                  <Box
                    key={card.title}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      p: 3,
                      display: 'flex',
                      gap: 2,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Box sx={{ color: '#4A90D9', flexShrink: 0, mt: 0.5 }}>{card.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', mb: 0.5 }}>{card.title}</Typography>
                      {card.lines.map(l => (
                        <Typography key={l} sx={{ fontSize: '1.4rem', color: '#A8BDD0' }}>{l}</Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <Box sx={{ bgcolor: '#F7FAFD', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip label="What We Offer" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
            <Typography component="h2" sx={{ fontSize: { xs: '3rem', md: '3.8rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
              Comprehensive Imaging Services
            </Typography>
            <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 600, mx: 'auto' }}>
              From routine X-rays to advanced MRI and interventional procedures — all under one roof.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {SERVICES.map(service => (
              <Grid item xs={12} sm={6} md={3} key={service.slug}>
                <Card
                  component="a"
                  href={`/services/${service.slug}`}
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '1px solid #E2EAF4',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: '#4A90D9',
                      boxShadow: '0 8px 30px rgba(11,79,130,0.12)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ fontSize: '3rem', mb: 1.5 }}>{service.icon}</Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1.4rem', color: '#5A6E84', flex: 1, lineHeight: 1.6 }}>
                      {service.shortDesc}
                    </Typography>
                    {service.bulkBilled && (
                      <Chip
                        label="Bulk Billing"
                        size="small"
                        sx={{ mt: 2, bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, fontSize: '1.2rem', alignSelf: 'flex-start' }}
                      />
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: '#0B4F82', fontWeight: 600, fontSize: '1.4rem', gap: 0.5 }}>
                      Learn more <ArrowForwardIcon sx={{ fontSize: '1.6rem' }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="Why Choose Us" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
              <Typography component="h2" sx={{ fontSize: { xs: '3rem', md: '3.8rem' }, fontWeight: 800, color: '#0B2747', mb: 3, letterSpacing: '-0.02em' }}>
                Quality Care You Can Trust
              </Typography>
              <Typography sx={{ fontSize: '1.7rem', color: '#5A6E84', mb: 4, lineHeight: 1.7 }}>
                For over 35 years, Goulburn Radiology has been the region's trusted provider of diagnostic imaging. Our fellowship-trained radiologists combine advanced technology with compassionate patient care.
              </Typography>
              {[
                ['Fellowship-trained subspecialists', 'Expertise in neuro, MSK, breast and interventional radiology'],
                ['Latest technology', 'Modern 64-slice CT, 3T MRI and digital mammography'],
                ['Rapid reporting', 'Routine results within 24–48 hours; urgent same-day'],
                ['Bulk billing', 'Available for eligible services with valid Medicare referral'],
                ['Patient comfort', 'Friendly staff committed to making your experience stress-free'],
              ].map(([title, desc]) => (
                <Box key={title} sx={{ display: 'flex', gap: 2, mb: 2.5 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#0B4F82', fontSize: '2.2rem', flexShrink: 0, mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747' }}>{title}</Typography>
                    <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84' }}>{desc}</Typography>
                  </Box>
                </Box>
              ))}
              <Button
                href="/about"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2, bgcolor: '#0B4F82', fontSize: '1.5rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { bgcolor: '#0a3d64' } }}
              >
                About Our Practice
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Stats grid */}
              <Grid container spacing={2}>
                {[
                  { value: '35+', label: 'Years Serving Goulburn' },
                  { value: '4', label: 'Subspecialist Radiologists' },
                  { value: '8', label: 'Imaging Modalities' },
                  { value: '24h', label: 'Routine Report Turnaround' },
                ].map(stat => (
                  <Grid item xs={6} key={stat.value}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: '14px',
                        bgcolor: '#F7FAFD',
                        border: '1px solid #E2EAF4',
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '4rem', fontWeight: 800, color: '#0B4F82', lineHeight: 1 }}>{stat.value}</Typography>
                      <Typography sx={{ fontSize: '1.4rem', color: '#5A6E84', mt: 1 }}>{stat.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── TEAM PREVIEW ─────────────────────────────────────── */}
      <Box sx={{ bgcolor: '#F7FAFD', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip label="Our Doctors" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
            <Typography component="h2" sx={{ fontSize: { xs: '3rem', md: '3.8rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
              Meet Our Radiologists
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {TEAM.map(member => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <Box
                  sx={{
                    p: 4,
                    bgcolor: '#fff',
                    borderRadius: '14px',
                    border: '1px solid #E2EAF4',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Box sx={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', mx: 'auto', mb: 2, position: 'relative', flexShrink: 0 }}>
                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 0.5 }}>{member.name}</Typography>
                  <Typography sx={{ fontSize: '1.3rem', color: '#0B4F82', fontWeight: 600, mb: 1.5 }}>{member.role}</Typography>
                  <Typography sx={{ fontSize: '1.4rem', color: '#5A6E84', lineHeight: 1.6 }}>{member.bio}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button href="/about" variant="outlined" size="large" sx={{ fontSize: '1.5rem', px: 5, py: 1.5, borderRadius: '10px', color: '#0B4F82', borderColor: '#0B4F82' }}>
              Meet the Full Team
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <Box sx={{ bgcolor: '#0B4F82', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: '#fff', mb: 2 }}>
            Ready to Book Your Appointment?
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: '#C8D8EB', mb: 5 }}>
            Call us or ask your doctor for a referral. Bulk billing available for eligible services.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
            <Button
              variant="contained"
              size="large"
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: '#fff', color: '#0B4F82', fontSize: '1.7rem', fontWeight: 700, px: 5, py: 2, borderRadius: '10px', '&:hover': { bgcolor: '#e8f0fe' } }}
            >
              {BUSINESS.phone}
            </Button>
            <Button
              href="/contact"
              variant="outlined"
              size="large"
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', fontSize: '1.7rem', px: 5, py: 2, borderRadius: '10px', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
