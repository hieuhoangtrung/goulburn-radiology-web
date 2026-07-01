import {
  AppBar, Box, Button, Container, Drawer,
  IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, useScrollTrigger,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useState } from 'react';
import { NAV_LINKS, BUSINESS } from '@src/lib/content';

const DARK = '#1B273A';
const PRIMARY = '#414D63';
const ACCENT = '#2D6A9F';
const ACCENT_LIGHT = '#EBF4FF';

export const SiteHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      {/* Top utility bar — thin, subtle */}
      <Box sx={{ bgcolor: DARK, color: 'rgba(255,255,255,0.85)', py: 0.7, display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ fontSize: '1.3rem' }}>
              Family-owned medical imaging · Goulburn NSW 2580
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.65)' }}>Mon–Fri 8:30am–5:00pm</Box>
              <Box sx={{ width: '1px', height: 14, bgcolor: 'rgba(255,255,255,0.25)' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                <PhoneIcon sx={{ fontSize: '1.5rem' }} />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.4rem' }}>
                  {BUSINESS.phone}
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main nav — white, clean, minimal */}
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: '#fff',
          borderBottom: scrolled ? 'none' : '1px solid #E8EDF2',
          boxShadow: scrolled ? '0 2px 20px rgba(27,39,58,0.1)' : 'none',
          transition: 'all 0.25s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: '6.5rem', md: '7.5rem' }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative', width: { xs: 155, md: 195 }, height: { xs: 46, md: 54 } }}>
                <Image
                  src={BUSINESS.logo}
                  alt="Goulburn Radiology"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                  priority
                />
              </Box>
            </a>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <Button key={link.href} href={link.href}
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: isActive(link.href) ? 700 : 500,
                    color: isActive(link.href) ? DARK : PRIMARY,
                    px: 2, py: 1,
                    borderBottom: isActive(link.href) ? `2px solid ${DARK}` : '2px solid transparent',
                    borderRadius: '0',
                    '&:hover': { color: DARK, bgcolor: 'transparent', borderBottom: `2px solid ${DARK}` },
                    transition: 'all 0.18s',
                  }}>
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Right: CTA + hamburger */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
                startIcon={<PhoneIcon sx={{ fontSize: '1.7rem !important' }} />}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  bgcolor: DARK, color: '#fff',
                  fontSize: '1.5rem', fontWeight: 700,
                  px: 3, py: 1.2, borderRadius: '8px',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: PRIMARY, boxShadow: '0 4px 16px rgba(27,39,58,0.25)' },
                  transition: 'all 0.2s',
                }}>
                {BUSINESS.phone}
              </Button>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ display: { xs: 'flex', lg: 'none' }, color: DARK, p: 1 }}
                aria-label="Open navigation menu">
                <MenuIcon sx={{ fontSize: '2.8rem' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 300, bgcolor: '#fff' } }}>
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8EDF2' }}>
          <Box sx={{ position: 'relative', width: 140, height: 40 }}>
            <Image src={BUSINESS.logo} alt="Goulburn Radiology" layout="fill" objectFit="contain" objectPosition="left center" />
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: DARK }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)}
                selected={isActive(link.href)}
                sx={{
                  py: 1.8, px: 3,
                  borderLeft: isActive(link.href) ? `3px solid ${DARK}` : '3px solid transparent',
                  '&.Mui-selected': { bgcolor: ACCENT_LIGHT },
                }}>
                <ListItemText primary={link.label}
                  primaryTypographyProps={{ fontSize: '1.6rem', fontWeight: isActive(link.href) ? 700 : 400, color: DARK }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 3, mt: 'auto', borderTop: '1px solid #E8EDF2' }}>
          <Button fullWidth variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g,'')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: DARK, fontSize: '1.6rem', py: 1.6, borderRadius: '8px', boxShadow: 'none', '&:hover': { bgcolor: PRIMARY } }}>
            {BUSINESS.phone}
          </Button>
          <Box sx={{ mt: 1.5, textAlign: 'center', fontSize: '1.3rem', color: PRIMARY }}>Mon–Fri 8:30am–5:00pm</Box>
        </Box>
      </Drawer>
    </>
  );
};
