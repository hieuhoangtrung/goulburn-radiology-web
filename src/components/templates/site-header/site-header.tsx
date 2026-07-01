import {
  AppBar, Box, Button, Container, Drawer,
  IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, useScrollTrigger,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { NAV_LINKS, BUSINESS } from '@src/lib/content';

// Real brand colors from goulburnradiology.com.au
const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', accent: '#414D63' };

export const SiteHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <Box sx={{ bgcolor: BRAND.dark, color: '#fff', py: 0.75 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.75)' }}>
              Family-owned medical imaging in Goulburn, NSW
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <PhoneIcon sx={{ fontSize: '1.5rem' }} />
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.4rem' }}>
                {BUSINESS.phone}
              </a>
              <Box sx={{ mx: 1, color: 'rgba(255,255,255,0.4)' }}>|</Box>
              <Box sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.75)' }}>Mon–Fri 8:30am–5:00pm</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main nav */}
      <AppBar position="sticky" elevation={scrolled ? 3 : 0}
        sx={{ bgcolor: '#fff', borderBottom: '2px solid ' + BRAND.dark, transition: 'box-shadow 0.2s' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: '6rem', md: '7rem' }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <Box sx={{
                width: 46, height: 46, borderRadius: '8px', bgcolor: BRAND.dark,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Box component="span" sx={{ color: '#fff', fontWeight: 800, fontSize: '2.2rem', lineHeight: 1 }}>G</Box>
              </Box>
              <Box>
                <Box sx={{ color: BRAND.dark, fontWeight: 800, fontSize: { xs: '1.7rem', md: '2.1rem' }, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                  Goulburn Radiology
                </Box>
                <Box sx={{ color: BRAND.mid, fontWeight: 500, fontSize: '1.2rem', letterSpacing: '0.03em' }}>
                  Medical Imaging & Diagnostic Services
                </Box>
              </Box>
            </a>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <Button key={link.href} href={link.href} sx={{
                  color: isActive(link.href) ? '#fff' : BRAND.mid,
                  fontWeight: isActive(link.href) ? 700 : 500,
                  fontSize: '1.45rem',
                  px: 2, py: 1,
                  borderRadius: '6px',
                  bgcolor: isActive(link.href) ? BRAND.dark : 'transparent',
                  '&:hover': { bgcolor: BRAND.dark, color: '#fff' },
                  transition: 'all 0.18s',
                }}>
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* CTA + mobile */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{
                  display: { xs: 'none', md: 'flex' }, bgcolor: BRAND.dark, color: '#fff',
                  fontSize: '1.45rem', fontWeight: 700, px: 2.5, py: 1.2, borderRadius: '6px',
                  '&:hover': { bgcolor: BRAND.mid },
                }}>
                {BUSINESS.phone}
              </Button>
              <IconButton onClick={() => setMobileOpen(true)}
                sx={{ display: { xs: 'flex', lg: 'none' }, color: BRAND.dark }} aria-label="Open menu">
                <MenuIcon sx={{ fontSize: '2.8rem' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#fff' } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: BRAND.dark, color: '#fff' }}>
          <Box sx={{ fontWeight: 800, fontSize: '1.7rem' }}>Goulburn Radiology</Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)}
                selected={isActive(link.href)}
                sx={{ py: 1.5, px: 3, '&.Mui-selected': { bgcolor: BRAND.light, color: BRAND.dark, fontWeight: 700 } }}>
                <ListItemText primary={link.label}
                  primaryTypographyProps={{ fontSize: '1.6rem', fontWeight: isActive(link.href) ? 700 : 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 3, mt: 'auto', borderTop: '1px solid #eee' }}>
          <Button fullWidth variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: BRAND.dark, fontSize: '1.5rem', py: 1.5, borderRadius: '6px' }}>
            {BUSINESS.phone}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
