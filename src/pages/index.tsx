import {
  Box, Button, Card, CardContent, Chip, Container, Grid, Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { SERVICES, BUSINESS, META } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Goulburn Radiology | Affordable Bulk Billed Medical Imaging in Goulburn NSW</title>
      <meta name="description" content="Family-owned Goulburn Radiology offers high-quality, bulk billed medical imaging — X-Ray, Ultrasound and more. We accept all Medicare referrals. Call 02 4821 4666." />
    </Head>

    {/* HERO */}
    <Box sx={{ bgcolor: BRAND.dark, color: '#fff', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        <Image src={BUSINESS.hero.backgroundImage}
          alt="" layout="fill" objectFit="cover" />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Chip label="Family-owned · Goulburn NSW" sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, mb: 2.5, fontSize: '1.3rem' }} />
            <Typography component="h1" sx={{ fontSize: { xs: '3.4rem', md: '4.8rem', lg: '5.4rem' }, fontWeight: 800, lineHeight: 1.1, mb: 3, color: '#fff', letterSpacing: '-0.02em' }}>
              Affordable, Reliable<br />
              <Box component="span" sx={{ color: 'rgba(255,255,255,0.75)' }}>Medical Imaging</Box><br />
              Bulk Billed in Goulburn
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, color: 'rgba(255,255,255,0.8)', mb: 4, lineHeight: 1.65, maxWidth: 580 }}>
              {BUSINESS.hero.subtext}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
              {BUSINESS.hero.badges.map((tag: string) => (
                <Box key={tag} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: 'rgba(255,255,255,0.85)', fontSize: '1.5rem' }}>
                  <CheckCircleOutlineIcon sx={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.6)' }} />
                  {tag}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#fff', color: BRAND.dark, fontSize: '1.6rem', fontWeight: 700, px: 4, py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: BRAND.light } }}>
                {BUSINESS.phone}
              </Button>
              <Button href="/services" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)', fontSize: '1.6rem', px: 4, py: 1.8, borderRadius: '8px', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}>
                Our Services
              </Button>
            </Box>
          </Grid>

          {/* Info cards */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: '🕐', title: 'Opening Hours', lines: ['Monday – Friday', '8:30 am – 5:00 pm'] },
                { icon: '📍', title: 'Location', lines: [`${BUSINESS.addressLocality} ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`] },
                { icon: '💳', title: 'Bulk Billing', lines: ['We accept all referrals where Medicare is applicable', 'No out-of-pocket costs for eligible patients'] },
                { icon: '📞', title: 'Book Now', lines: [BUSINESS.phone] },
              ].map(card => (
                <Box key={card.title} sx={{ bgcolor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', p: 2.5, display: 'flex', gap: 2, backdropFilter: 'blur(8px)' }}>
                  <Box sx={{ fontSize: '2.2rem', flexShrink: 0 }}>{card.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', mb: 0.5 }}>{card.title}</Typography>
                    {card.lines.map(l => <Typography key={l} sx={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)' }}>{l}</Typography>)}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* SERVICES */}
    <Box sx={{ bgcolor: BRAND.bg, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
            Our Imaging Services
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 580, mx: 'auto' }}>
            High-quality diagnostic imaging with a strong focus on patient safety and comfort.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {SERVICES.map((service: import('@src/lib/content').Service) => (
            <Grid item xs={12} sm={6} md={3} key={service.slug}>
              <Card component="a" href={`/services/${service.slug}`} elevation={0}
                sx={{ height: '100%', border: '1px solid #EAEAEA', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.22s', display: 'flex', flexDirection: 'column', bgcolor: '#fff', '&:hover': { borderColor: BRAND.mid, boxShadow: '0 6px 24px rgba(27,39,58,0.1)', transform: 'translateY(-2px)' } }}>
                <Box sx={{ height: 160, position: 'relative', bgcolor: BRAND.light, borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  {service.comingSoon && (
                    <Box sx={{ position: 'absolute', top: 10, right: 10, bgcolor: BRAND.dark, color: '#fff', fontSize: '1.2rem', fontWeight: 700, px: 1.5, py: 0.5, borderRadius: '20px' }}>
                      Coming Soon
                    </Box>
                  )}
                </Box>
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ fontSize: '2.5rem', mb: 1 }}>{service.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: BRAND.dark, mb: 1 }}>{service.title}</Typography>
                  <Typography sx={{ fontSize: '1.4rem', color: BRAND.mid, flex: 1, lineHeight: 1.6 }}>{service.shortDesc}</Typography>
                  {service.bulkBilled && !service.comingSoon && (
                    <Chip label="Bulk Billed" size="small" sx={{ mt: 2, bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, fontSize: '1.2rem', alignSelf: 'flex-start' }} />
                  )}
                  {!service.comingSoon && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: BRAND.dark, fontWeight: 600, fontSize: '1.4rem', gap: 0.5 }}>
                      Learn more <ArrowForwardIcon sx={{ fontSize: '1.6rem' }} />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* WHY US */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.4rem' }, fontWeight: 800, color: BRAND.dark, mb: 3 }}>
              Expert Care, Close to Home
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: BRAND.mid, mb: 4, lineHeight: 1.75 }}>
              Goulburn Radiology was founded by two experienced sonographers who saw a need for a premium imaging service that combines subspecialty expertise with high-quality, personalised patient care in a friendly and approachable environment.
            </Typography>
            {BUSINESS.whyUs.map((item: { title: string; desc: string }) => (
              <Box key={item.title} sx={{ display: 'flex', gap: 2, mb: 2.5 }}>
                <CheckCircleOutlineIcon sx={{ color: BRAND.dark, fontSize: '2.2rem', flexShrink: 0, mt: 0.2 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: BRAND.dark }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '1.5rem', color: BRAND.mid }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
            <Button href="/about" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
              sx={{ mt: 2, bgcolor: BRAND.dark, fontSize: '1.5rem', px: 4, py: 1.5, borderRadius: '8px', '&:hover': { bgcolor: BRAND.mid } }}>
              About Our Practice
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {BUSINESS.stats.map((stat: { value: string; label: string }) => (
                <Grid item xs={6} key={stat.value}>
                  <Box sx={{ p: 4, borderRadius: '12px', bgcolor: BRAND.light, border: '1px solid #EAEAEA', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '4rem', fontWeight: 800, color: BRAND.dark, lineHeight: 1 }}>{stat.value}</Typography>
                    <Typography sx={{ fontSize: '1.4rem', color: BRAND.mid, mt: 1 }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ELECTRONIC IMAGES FEATURE */}
    <Box sx={{ bgcolor: BRAND.bg, py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
              Secure Electronic Image Delivery
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: BRAND.mid, mb: 3, lineHeight: 1.75 }}>
              At Goulburn Radiology we go beyond the traditional by offering our patients secure, password-protected electronic copies of their imaging results — available wherever you need them.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
            <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: BRAND.dark, fontSize: '1.6rem', px: 5, py: 2, borderRadius: '8px', mb: 1.5 }}>
              Book an Appointment
            </Button>
            <Typography sx={{ fontSize: '1.4rem', color: BRAND.mid }}>
              {BUSINESS.phone} · Mon–Fri 8:30am–5:00pm
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* CTA */}
    <Box sx={{ bgcolor: BRAND.dark, py: { xs: 7, md: 9 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2.8rem', md: '3.4rem' }, fontWeight: 800, color: '#fff', mb: 2 }}>
          Ready to Book Your Appointment?
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.75)', mb: 5 }}>
          We accept all referrals where Medicare is applicable. Call us during business hours to book.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
          <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: '#fff', color: BRAND.dark, fontSize: '1.7rem', fontWeight: 700, px: 5, py: 2, borderRadius: '8px', '&:hover': { bgcolor: BRAND.light } }}>
            {BUSINESS.phone}
          </Button>
          <Button href="/patient-information" variant="outlined" size="large"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)', fontSize: '1.7rem', px: 5, py: 2, borderRadius: '8px', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}>
            Patient Information
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default HomePage;
