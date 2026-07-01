import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Image from 'next/image';
import { SERVICES, Service, BUSINESS } from '@src/lib/content';

interface Props {
  service: Service;
  related: Service[];
}

const ServiceDetailPage: NextPage<Props> = ({ service, related }) => (
  <>
    <Head>
      <title>{service.title} | Goulburn Radiology</title>
      <meta name="description" content={`${service.title} at Goulburn Radiology in Goulburn NSW. ${service.shortDesc} Call (02) 4821 5733 to book.`} />
    </Head>

    {/* Breadcrumb + Hero */}
    <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, fontSize: '1.4rem', color: '#5A6E84' }}>
          <a href="/"  style={{ color: '#5A6E84', textDecoration: 'none' }}>Home</a>
          <Box>/</Box>
          <a href="/services"  style={{ color: '#5A6E84', textDecoration: 'none' }}>Services</a>
          <Box>/</Box>
          <Box sx={{ color: '#0B4F82', fontWeight: 600 }}>{service.title}</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ fontSize: '4rem' }}>{service.icon}</Box>
          <Box>
            <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: '#0B2747', letterSpacing: '-0.02em' }}>
              {service.title}
            </Typography>
            {service.bulkBilled && (
              <Chip label="Bulk Billing Available" size="small" sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, mt: 0.5, fontSize: '1.3rem' }} />
            )}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 700 }}>
          {service.shortDesc}
        </Typography>
      </Container>
    </Box>

    {/* Service hero image */}
    <Box sx={{ width: '100%', height: { xs: 220, md: 340 }, position: 'relative', bgcolor: '#E2EAF4' }}>
      <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" priority />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,39,71,0.18) 0%, rgba(11,39,71,0.55) 100%)' }} />
    </Box>

    {/* Main content */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left: detail */}
          <Grid item xs={12} md={8}>
            <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B2747', mb: 2 }}>
              About {service.title}
            </Typography>
            <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.75, mb: 5 }}>
              {service.description}
            </Typography>

            <Typography component="h3" sx={{ fontSize: '2rem', fontWeight: 700, color: '#0B2747', mb: 2 }}>
              Common Indications
            </Typography>
            <List disablePadding sx={{ mb: 5 }}>
              {service.indications.map(ind => (
                <ListItem key={ind} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 34 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#0B4F82', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary={ind} primaryTypographyProps={{ fontSize: '1.6rem', color: '#3A4E62' }} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mb: 5 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 3, bgcolor: '#F7FAFD', borderRadius: '12px', border: '1px solid #E2EAF4' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <AccessTimeIcon sx={{ color: '#0B4F82' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747' }}>Duration</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.5rem', color: '#3A4E62' }}>{service.duration}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 3, bgcolor: '#F7FAFD', borderRadius: '12px', border: '1px solid #E2EAF4' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Box sx={{ fontSize: '1.8rem' }}>📋</Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747' }}>Preparation</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.5rem', color: '#3A4E62', lineHeight: 1.6 }}>{service.preparation}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right: sidebar */}
          <Grid item xs={12} md={4}>
            {/* Booking CTA */}
            <Box sx={{ p: 4, bgcolor: '#0B4F82', borderRadius: '14px', color: '#fff', mb: 3 }}>
              <Typography sx={{ fontWeight: 800, fontSize: '2rem', mb: 1.5 }}>Book This Service</Typography>
              <Typography sx={{ fontSize: '1.5rem', color: '#C8D8EB', mb: 3, lineHeight: 1.6 }}>
                Ask your doctor for a referral, then call us to book your appointment.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{ bgcolor: '#fff', color: '#0B4F82', fontSize: '1.6rem', fontWeight: 700, py: 1.8, borderRadius: '8px', mb: 1.5, '&:hover': { bgcolor: '#e8f0fe' } }}
              >
                {BUSINESS.phone}
              </Button>
              <Typography sx={{ fontSize: '1.3rem', color: '#9AC8F0', textAlign: 'center' }}>Mon–Fri 8am–5:30pm · Sat 8:30am–12:30pm</Typography>
            </Box>

            {/* What to bring */}
            <Box sx={{ p: 3, bgcolor: '#F7FAFD', borderRadius: '14px', border: '1px solid #E2EAF4', mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 2 }}>What to Bring</Typography>
              {['Referral from your doctor', 'Medicare card', 'Health fund card (if applicable)', 'Previous imaging / reports', 'List of current medications'].map(item => (
                <Box key={item} sx={{ display: 'flex', gap: 1.2, mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: '#0B4F82', fontSize: '1.8rem', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '1.45rem', color: '#3A4E62' }}>{item}</Typography>
                </Box>
              ))}
            </Box>

            {/* Back link */}
            <Button
              href="/services"
              startIcon={<ArrowBackIcon />}
              sx={{ color: '#0B4F82', fontSize: '1.4rem' }}
            >
              All Services
            </Button>
          </Grid>
        </Grid>

        {/* Related services */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Divider sx={{ mb: 5 }} />
            <Typography component="h3" sx={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B2747', mb: 4 }}>
              Other Services
            </Typography>
            <Grid container spacing={3}>
              {related.map(s => (
                <Grid item xs={12} sm={6} md={4} key={s.slug}>
                  <Box component="a" href={`/services/${s.slug}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2.5,
                      bgcolor: '#F7FAFD',
                      border: '1px solid #E2EAF4',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover': { borderColor: '#4A90D9', bgcolor: '#EEF6FF' },
                    }}
                  >
                    <Box sx={{ fontSize: '2.8rem', flexShrink: 0 }}>{s.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: '#0B2747' }}>{s.title}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#0B4F82', fontSize: '1.3rem', fontWeight: 600, mt: 0.3 }}>
                        Learn more <ArrowForwardIcon sx={{ fontSize: '1.4rem' }} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SERVICES.map(s => ({ params: { slug: s.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return { notFound: true };
  const related = SERVICES.filter(s => s.slug !== slug).slice(0, 3);
  return { props: { service, related } };
};

export default ServiceDetailPage;
