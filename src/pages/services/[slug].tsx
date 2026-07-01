import { Box, Button, Chip, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { SERVICES, Service, BUSINESS } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

interface Props { service: Service; related: Service[]; }

const ServiceDetailPage: NextPage<Props> = ({ service, related }) => (
  <>
    <Head>
      <title>{service.title} | Goulburn Radiology</title>
      <meta name="description" content={`${service.title} at Goulburn Radiology in Goulburn NSW. ${service.shortDesc} Call 02 4821 4666 to book.`} />
    </Head>

    {/* Breadcrumb */}
    <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, fontSize: '1.4rem', color: BRAND.mid }}>
          <a href="/" style={{ color: BRAND.mid, textDecoration: 'none' }}>Home</a>
          <Box>/</Box>
          <a href="/services" style={{ color: BRAND.mid, textDecoration: 'none' }}>Services</a>
          <Box>/</Box>
          <Box sx={{ color: BRAND.dark, fontWeight: 600 }}>{service.title}</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ fontSize: '4rem' }}>{service.icon}</Box>
          <Box>
            <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: BRAND.dark }}>
              {service.title}
            </Typography>
            {service.comingSoon ? (
              <Chip label="Coming Soon — Awaiting Power Upgrade" sx={{ bgcolor: BRAND.mid, color: '#fff', fontWeight: 600, mt: 0.5 }} />
            ) : service.bulkBilled ? (
              <Chip label="Bulk Billed with Medicare Referral" size="small" sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 600, mt: 0.5, fontSize: '1.3rem' }} />
            ) : null}
          </Box>
        </Box>
        <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 700 }}>{service.shortDesc}</Typography>
      </Container>
    </Box>

    {/* Hero image */}
    <Box sx={{ width: '100%', height: { xs: 220, md: 340 }, position: 'relative', bgcolor: BRAND.light }}>
      <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
      {service.comingSoon && (
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(27,39,58,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, textAlign: 'center' }}>
            Coming Soon — Awaiting Power Upgrade
          </Typography>
        </Box>
      )}
    </Box>

    {/* Main content */}
    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 2 }}>
              About {service.title}
            </Typography>
            {service.description.split('\n\n').map((para, i) => (
              <Typography key={i} sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.8, mb: 3 }}>{para}</Typography>
            ))}

            {/* Types of ultrasound */}
            {service.types && service.types.length > 0 && (
              <Box sx={{ p: 3, bgcolor: BRAND.bg, border: '1px solid #EAEAEA', borderRadius: '10px', mb: 4 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.8rem', color: BRAND.dark, mb: 2 }}>Types of {service.title}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {service.types.map((t: string) => (
                    <Chip key={t} label={t} sx={{ bgcolor: '#fff', border: '1px solid #EAEAEA', color: BRAND.dark, fontWeight: 600, fontSize: '1.4rem' }} />
                  ))}
                </Box>
              </Box>
            )}

            {service.indications && service.indications.length > 0 && (
              <>
                <Typography component="h3" sx={{ fontSize: '2rem', fontWeight: 700, color: BRAND.dark, mb: 2 }}>Common Uses</Typography>
                <List disablePadding sx={{ mb: 4 }}>
                  {service.indications.map((ind: string) => (
                    <ListItem key={ind} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 34 }}><CheckCircleOutlineIcon sx={{ color: BRAND.dark, fontSize: '2rem' }} /></ListItemIcon>
                      <ListItemText primary={ind} primaryTypographyProps={{ fontSize: '1.6rem', color: '#3A4E62' }} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}

            {!service.comingSoon && (
              <>
                <Divider sx={{ mb: 4 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 3, bgcolor: BRAND.bg, borderRadius: '10px', border: '1px solid #EAEAEA' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <AccessTimeIcon sx={{ color: BRAND.dark }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: BRAND.dark }}>Duration</Typography>
                      </Box>
                      <Typography sx={{ fontSize: '1.5rem', color: '#3A4E62' }}>{service.duration}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 3, bgcolor: BRAND.bg, borderRadius: '10px', border: '1px solid #EAEAEA' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: BRAND.dark, mb: 1 }}>Preparation</Typography>
                      <Typography sx={{ fontSize: '1.5rem', color: '#3A4E62', lineHeight: 1.6 }}>{service.preparation}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Box sx={{ p: 4, bgcolor: BRAND.dark, borderRadius: '12px', color: '#fff', mb: 3 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '2rem', mb: 1.5 }}>
                  {service.comingSoon ? 'Stay Tuned' : 'Book This Service'}
                </Typography>
                <Typography sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.75)', mb: 3, lineHeight: 1.6 }}>
                  {service.comingSoon
                    ? 'This service is coming soon. Call us to find out the latest availability.'
                    : 'Ask your doctor for a referral, then call us to book your appointment.'}
                </Typography>
                <Button fullWidth variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                  startIcon={<PhoneIcon />}
                  sx={{ bgcolor: '#fff', color: BRAND.dark, fontSize: '1.6rem', fontWeight: 700, py: 1.8, borderRadius: '8px', mb: 1.5, '&:hover': { bgcolor: BRAND.light } }}>
                  {BUSINESS.phone}
                </Button>
                <Typography sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>Mon–Fri 8:30am–5:00pm</Typography>
              </Box>
              {!service.comingSoon && (
                <Box sx={{ p: 3, bgcolor: BRAND.bg, borderRadius: '12px', border: '1px solid #EAEAEA', mb: 3 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: BRAND.dark, mb: 2 }}>What to Bring</Typography>
                  {['Referral from your GP or specialist', 'Medicare card', 'Health fund card (if applicable)', 'Previous imaging or reports'].map(item => (
                    <Box key={item} sx={{ display: 'flex', gap: 1.2, mb: 1 }}>
                      <CheckCircleOutlineIcon sx={{ color: BRAND.dark, fontSize: '1.8rem', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '1.45rem', color: '#3A4E62' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
              <Button href="/services" startIcon={<ArrowBackIcon />} sx={{ color: BRAND.dark, fontSize: '1.4rem' }}>All Services</Button>
            </Box>
          </Grid>
        </Grid>

        {/* Related services */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Divider sx={{ mb: 5 }} />
            <Typography component="h3" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 4 }}>Other Services</Typography>
            <Grid container spacing={3}>
              {related.map((s: Service) => (
                <Grid item xs={12} sm={6} md={3} key={s.slug}>
                  <Box component="a" href={`/services/${s.slug}`}
                    sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5, bgcolor: BRAND.bg, border: '1px solid #EAEAEA', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s', '&:hover': { borderColor: BRAND.mid, bgcolor: '#fff' } }}>
                    <Box sx={{ fontSize: '2.8rem', flexShrink: 0 }}>{s.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.6rem', color: BRAND.dark }}>{s.title}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: BRAND.mid, fontSize: '1.3rem', fontWeight: 600, mt: 0.3 }}>
                        {s.comingSoon ? 'Coming soon' : <><span>View</span> <ArrowForwardIcon sx={{ fontSize: '1.4rem' }} /></>}
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
  const related = SERVICES.filter(s => s.slug !== slug);
  return { props: { service, related } };
};

export default ServiceDetailPage;
