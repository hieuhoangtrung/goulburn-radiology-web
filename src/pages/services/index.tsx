import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

import Image from 'next/image';
import { SERVICES, BUSINESS } from '@src/lib/content';

const ServicesPage: NextPage = () => (
  <>
    <Head>
      <title>Medical Imaging Services | Goulburn Radiology</title>
      <meta name="description" content="Goulburn Radiology offers X-Ray, CT, MRI, Ultrasound, DEXA, Mammography and more. Bulk billing available on eligible services. Serving Goulburn NSW." />
    </Head>

    {/* Hero */}
    <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Chip label="What We Offer" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
          Our Imaging Services
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 680 }}>
          We offer a full range of diagnostic imaging services with fellowship-trained radiologists and modern equipment. Bulk billing available with a valid Medicare referral.
        </Typography>
      </Container>
    </Box>

    {/* Service cards */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {SERVICES.map(service => (
            <Grid item xs={12} sm={6} md={4} key={service.slug}>
              <Card
                component={Link}
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
                    boxShadow: '0 8px 32px rgba(11,79,130,0.12)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ height: 160, borderRadius: '8px', overflow: 'hidden', mb: 2, position: 'relative', bgcolor: '#E2EAF4' }}>
                    <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                  </Box>
                  <Box sx={{ fontSize: '2.5rem', mb: 1 }}>{service.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '2rem', color: '#0B2747', mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', flex: 1, lineHeight: 1.65 }}>
                    {service.shortDesc}
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {service.bulkBilled ? (
                      <Chip label="Bulk Billing" size="small" sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, fontSize: '1.2rem' }} />
                    ) : (
                      <Box />
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#0B4F82', fontWeight: 600, fontSize: '1.4rem', gap: 0.5 }}>
                      Details <ArrowForwardIcon sx={{ fontSize: '1.6rem' }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Bulk billing note */}
    <Box sx={{ bgcolor: '#EEF6FF', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3rem' }, fontWeight: 800, color: '#0B2747', mb: 2 }}>
              Bulk Billing Information
            </Typography>
            {[
              'Bulk billing is available for many services including X-Ray, Ultrasound, DEXA and Mammography.',
              'A valid Medicare card and GP/specialist referral are required.',
              'Some services may attract a gap payment — please enquire when booking.',
              'Pensioner and Health Care Card holders may be eligible for reduced fees.',
            ].map(line => (
              <Box key={line} sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ color: '#0B4F82', fontSize: '2rem', flexShrink: 0, mt: 0.2 }} />
                <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62' }}>{line}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
            <Button
              variant="contained"
              size="large"
              href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
              sx={{ bgcolor: '#0B4F82', fontSize: '1.6rem', px: 5, py: 2, borderRadius: '10px', mb: 2 }}
            >
              Call to Book
            </Button>
            <Typography sx={{ fontSize: '1.4rem', color: '#5A6E84' }}>
              {BUSINESS.phone}<br />Mon–Fri 8:00am–5:30pm
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default ServicesPage;
