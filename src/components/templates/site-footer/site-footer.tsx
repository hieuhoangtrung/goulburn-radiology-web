import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';

import { BUSINESS, META, NAV_LINKS, SERVICES } from '@src/lib/content';

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: '#0B2747', color: '#C8D8EB', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ color: '#fff', fontWeight: 800, fontSize: '2.2rem', lineHeight: 1.1 }}>Goulburn Radiology</Box>
              <Box sx={{ color: '#4A90D9', fontWeight: 600, fontSize: '1.3rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Medical Imaging</Box>
            </Box>
            <Typography sx={{ fontSize: '1.45rem', lineHeight: 1.7, color: '#A8BDD0', mb: 3 }}>
              Providing expert diagnostic imaging services to Goulburn and the Southern Tablelands since 1985.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                <LocationOnIcon sx={{ fontSize: '1.8rem', color: '#4A90D9', mt: 0.3, flexShrink: 0 }} />
                <Typography sx={{ fontSize: '1.4rem', color: '#A8BDD0' }}>{BUSINESS.addressStreet}<br />{BUSINESS.addressLocality} {BUSINESS.addressRegion} {BUSINESS.postalCode}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <PhoneIcon sx={{ fontSize: '1.8rem', color: '#4A90D9', flexShrink: 0 }} />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} style={{ color: '#A8BDD0', textDecoration: 'none', fontSize: '1.4rem' }}>{BUSINESS.phone}</a>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <EmailIcon sx={{ fontSize: '1.8rem', color: '#4A90D9', flexShrink: 0 }} />
                <a href={`mailto:${BUSINESS.email}`} style={{ color: '#A8BDD0', textDecoration: 'none', fontSize: '1.4rem' }}>{BUSINESS.email}</a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.6rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {SERVICES.map((s: import('@src/lib/content').Service) => (
                <a key={s.slug} href={`/services/${s.slug}`} style={{ color: '#A8BDD0', textDecoration: 'none', fontSize: '1.4rem' }}>
                  <Box sx={{ '&:hover': { color: '#4A90D9' }, transition: 'color 0.2s' }}>{s.title}</Box>
                </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.6rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <a key={link.href} href={link.href} style={{ color: '#A8BDD0', textDecoration: 'none', fontSize: '1.4rem' }}>
                  <Box sx={{ '&:hover': { color: '#4A90D9' }, transition: 'color 0.2s' }}>{link.label}</Box>
                </a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.6rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Opening Hours</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {BUSINESS.hours.map((h: { days: string; hours: string }) => (
                <Box key={h.days} sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', borderBottom: '1px solid rgba(255,255,255,0.06)', pb: 1 }}>
                  <Box sx={{ color: '#A8BDD0' }}>{h.days}</Box>
                  <Box sx={{ color: '#fff', fontWeight: 600 }}>{h.hours}</Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(74,144,217,0.15)', borderRadius: '8px', border: '1px solid rgba(74,144,217,0.3)' }}>
              <Typography sx={{ fontSize: '1.35rem', color: '#A8BDD0' }}>
                <strong style={{ color: '#fff' }}>Emergency imaging?</strong><br />
                After-hours services available through Goulburn Base Hospital.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '1.3rem', color: '#6B8299' }}>© {year} {META.siteName}. All rights reserved.</Typography>
          <Box sx={{ display: 'flex', gap: 3, fontSize: '1.3rem' }}>
            <a href="/privacy" style={{ color: '#6B8299', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/contact" style={{ color: '#6B8299', textDecoration: 'none' }}>Contact</a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
