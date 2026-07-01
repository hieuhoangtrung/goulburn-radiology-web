import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { SERVICES, BUSINESS } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const ServicesPage: NextPage = () => (
  <>
    <Head>
      <title>Services | Goulburn Radiology</title>
      <meta name="description" content="Goulburn Radiology offers X-Ray/OPG and Ultrasound (Obstetric, MSK, Vascular, General) — bulk billed with Medicare referral. CT Scanning and Mammography coming soon." />
    </Head>

    <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Chip label="What We Offer" sx={{ bgcolor: '#EAEAEA', color: BRAND.dark, fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
          Our Imaging Services
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 680 }}>
          High-quality diagnostic imaging with a strong focus on patient safety, comfort and reduced radiation exposure.
        </Typography>
      </Container>
    </Box>

    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {SERVICES.map((service: import('@src/lib/content').Service) => (
            <Grid item xs={12} sm={6} key={service.slug}>
              <Card elevation={0} sx={{ border: '1px solid #EAEAEA', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: 220, position: 'relative', bgcolor: BRAND.light }}>
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  {service.comingSoon && (
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(27,39,58,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ bgcolor: '#fff', color: BRAND.dark, fontWeight: 800, fontSize: '1.6rem', px: 3, py: 1, borderRadius: '8px' }}>
                        Coming Soon — Awaiting Power Upgrade
                      </Box>
                    </Box>
                  )}
                </Box>
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box sx={{ fontSize: '2.8rem' }}>{service.icon}</Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '2.2rem', color: BRAND.dark }}>{service.title}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.6rem', color: BRAND.mid, lineHeight: 1.7, flex: 1 }}>{service.shortDesc}</Typography>
                  <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    {service.bulkBilled && !service.comingSoon && (
                      <Chip label="Bulk Billed" size="small" sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, fontSize: '1.2rem' }} />
                    )}
                    {!service.comingSoon && (
                      <Box component="a" href={`/services/${service.slug}`}
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: BRAND.dark, fontWeight: 700, fontSize: '1.5rem', textDecoration: 'none', '&:hover': { color: BRAND.mid } }}>
                        Learn more <ArrowForwardIcon sx={{ fontSize: '1.6rem' }} />
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    <Box sx={{ bgcolor: BRAND.bg, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
              Bulk Billing Information
            </Typography>
            {[
              'We accept all referrals where Medicare is applicable.',
              'Bring your referral form and Medicare card to your appointment.',
              'Our staff will confirm bulk billing eligibility when you book.',
              'Please call us if you have any questions about fees or eligibility.',
            ].map(line => (
              <Box key={line} sx={{ display: 'flex', gap: 1.5, mb: 1.8 }}>
                <CheckCircleOutlineIcon sx={{ color: BRAND.dark, fontSize: '2rem', flexShrink: 0, mt: 0.2 }} />
                <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62' }}>{line}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
            <Button variant="contained" size="large" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: BRAND.dark, fontSize: '1.6rem', px: 5, py: 2, borderRadius: '8px', mb: 1.5 }}>
              {BUSINESS.phone}
            </Button>
            <Typography sx={{ fontSize: '1.4rem', color: BRAND.mid }}>Mon–Fri 8:30am–5:00pm</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default ServicesPage;
