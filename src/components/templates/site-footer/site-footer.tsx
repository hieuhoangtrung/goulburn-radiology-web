import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import { BUSINESS, META, NAV_LINKS, SERVICES } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4' };

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: BRAND.dark, color: 'rgba(255,255,255,0.8)', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ color: '#fff', fontWeight: 800, fontSize: '2rem', lineHeight: 1.1 }}>Goulburn Radiology</Box>
              <Box sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.3rem', mt: 0.5 }}>Medical Imaging & Diagnostic Services</Box>
            </Box>
            <Typography sx={{ fontSize: '1.45rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', mb: 3 }}>
              Family-owned and operated, Goulburn Radiology was founded by two experienced sonographers committed to providing premium diagnostic imaging with personalised patient care.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <PhoneIcon sx={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                  style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 600 }}>
                  {BUSINESS.phone}
                </a>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <LocationOnIcon sx={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)' }}>
                  {BUSINESS.addressLocality} {BUSINESS.addressRegion} {BUSINESS.postalCode}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <AccessTimeIcon sx={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)' }}>
                  {BUSINESS.hours[0].days}: {BUSINESS.hours[0].hours}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {SERVICES.map((s: import('@src/lib/content').Service) => (
                <a key={s.slug} href={`/services/${s.slug}`}
                  style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '1.4rem' }}>
                  <Box sx={{ '&:hover': { color: '#fff' }, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {s.title}
                    {s.comingSoon && (
                      <Box component="span" sx={{ fontSize: '1.1rem', bgcolor: 'rgba(255,255,255,0.15)', px: 0.8, py: 0.2, borderRadius: '4px', ml: 0.5 }}>
                        Soon
                      </Box>
                    )}
                  </Box>
                </a>
              ))}
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <a key={link.href} href={link.href}
                  style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '1.4rem' }}>
                  <Box sx={{ '&:hover': { color: '#fff' }, transition: 'color 0.2s' }}>{link.label}</Box>
                </a>
              ))}
            </Box>
          </Grid>

          {/* Hours */}
          <Grid item xs={12} md={2.5}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Opening Hours
            </Typography>
            {BUSINESS.hours.map((h: { days: string; hours: string }) => (
              <Box key={h.days} sx={{ mb: 1.5 }}>
                <Typography sx={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.6)', mb: 0.2 }}>{h.days}</Typography>
                <Typography sx={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600 }}>{h.hours}</Typography>
              </Box>
            ))}
            <Box sx={{ mt: 3, p: 2.5, bgcolor: 'rgba(255,255,255,0.07)', borderRadius: '8px' }}>
              <Typography sx={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                📞 To book, call <strong style={{ color: '#fff' }}>{BUSINESS.phone}</strong> during business hours.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.45)' }}>
            {META.siteName} © Copyright {year}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '1.3rem' }}>Privacy Policy</a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
