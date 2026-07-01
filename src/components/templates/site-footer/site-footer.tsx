import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { BUSINESS, META, NAV_LINKS, SERVICES } from '@src/lib/content';

const DARK = '#1B273A';
const PRIMARY = '#414D63';

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: '#F8FAFC', borderTop: '1px solid #E8EDF2', mt: 'auto' }}>
      {/* CTA strip */}
      <Box sx={{ bgcolor: DARK, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
            <Box>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', md: '2.8rem' }, mb: 0.5 }}>
                Need to book an appointment?
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6rem' }}>
                Call us Mon–Fri 8:30am–5:00pm
              </Typography>
            </Box>
            <Button variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
              startIcon={<PhoneIcon />}
              sx={{ bgcolor: '#fff', color: DARK, fontWeight: 800, fontSize: '1.7rem', px: 4, py: 1.8, borderRadius: '10px', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#F0F4FF' } }}>
              {BUSINESS.phone}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main footer */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          {/* Brand col */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 800, fontSize: '2rem', color: DARK, mb: 0.5 }}>
              Goulburn Radiology
            </Typography>
            <Typography sx={{ fontSize: '1.4rem', color: PRIMARY, mb: 3 }}>
              Medical Imaging & Diagnostic Services
            </Typography>
            <Typography sx={{ fontSize: '1.5rem', color: '#64748B', lineHeight: 1.8, mb: 3.5 }}>
              Family-owned and operated, founded by two experienced sonographers committed to premium diagnostic imaging with personalised patient care.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
              {[
                { Icon: PhoneIcon, content: <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} style={{ color: DARK, textDecoration: 'none', fontWeight: 700, fontSize: '1.5rem' }}>{BUSINESS.phone}</a> },
                { Icon: LocationOnIcon, content: <Typography sx={{ fontSize: '1.45rem', color: '#64748B' }}>{BUSINESS.addressLocality} {BUSINESS.addressRegion} {BUSINESS.postalCode}</Typography> },
                { Icon: AccessTimeIcon, content: <Typography sx={{ fontSize: '1.45rem', color: '#64748B' }}>Mon–Fri 8:30am–5:00pm</Typography> },
              ].map(({ Icon, content }, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Icon sx={{ fontSize: '1.9rem', color: PRIMARY, flexShrink: 0 }} />
                  {content}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', color: DARK, mb: 2.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {SERVICES.map((s: import('@src/lib/content').Service) => (
                <Box key={s.slug} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <a href={`/services/${s.slug}`}
                    style={{ color: '#64748B', textDecoration: 'none', fontSize: '1.5rem' }}>
                    <Box sx={{ '&:hover': { color: DARK }, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {s.title}
                      {s.comingSoon && (
                        <Box component="span" sx={{ fontSize: '1.1rem', bgcolor: '#E8EDF2', color: PRIMARY, px: 0.8, py: 0.2, borderRadius: '4px', ml: 0.5, fontWeight: 600 }}>
                          Soon
                        </Box>
                      )}
                    </Box>
                  </a>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', color: DARK, mb: 2.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <a key={link.href} href={link.href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '1.5rem' }}>
                  <Box sx={{ '&:hover': { color: DARK }, transition: 'color 0.2s' }}>{link.label}</Box>
                </a>
              ))}
            </Box>
          </Grid>

          {/* Hours */}
          <Grid item xs={12} md={2.5}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', color: DARK, mb: 2.5, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Opening Hours
            </Typography>
            {BUSINESS.hours.map((h: { days: string; hours: string }) => (
              <Box key={h.days} sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: '1.35rem', color: '#64748B' }}>{h.days}</Typography>
                <Typography sx={{ fontSize: '1.55rem', color: DARK, fontWeight: 700 }}>{h.hours}</Typography>
              </Box>
            ))}
            <Box sx={{ mt: 3, p: 2.5, bgcolor: '#EBF4FF', borderRadius: '10px', border: '1px solid #BFDBFE' }}>
              <Typography sx={{ fontSize: '1.4rem', color: '#1E40AF', lineHeight: 1.65, fontWeight: 500 }}>
                📞 To book, call{' '}
                <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`} style={{ color: '#1B273A', fontWeight: 800, textDecoration: 'none' }}>
                  {BUSINESS.phone}
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: '#E8EDF2' }} />
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '1.35rem', color: '#94A3B8' }}>
            © {year} {META.siteName}. All rights reserved.
          </Typography>
          <a href="/privacy" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1.35rem' }}>
            Privacy Policy
          </a>
        </Box>
      </Container>
    </Box>
  );
};
