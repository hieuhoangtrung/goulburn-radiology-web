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

const PRIMARY = '#414D63';
const DARK = '#1B273A';
const BG = '#F8F8F8';

export const SiteHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <Box sx={{ bgcolor: DARK, color: '#fff', py: 0.8 }}>
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
              <Box sx={{ mx: 1, color: 'rgba(255,255,255,0.35)' }}>|</Box>
              <Box sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.75)' }}>Mon–Fri 8:30am–5:00pm</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main nav */}
      <AppBar position="sticky" elevation={scrolled ? 2 : 0}
        sx={{ bgcolor: '#fff', borderBottom: `2px solid ${DARK}`, transition: 'box-shadow 0.2s' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: '6.5rem', md: '7.5rem' }, justifyContent: 'space-between' }}>
            {/* Real logo */}
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative', width: { xs: 160, md: 200 }, height: { xs: 48, md: 56 } }}>
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

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <Button key={link.href} href={link.href} sx={{
                  color: isActive(link.href) ? '#fff' : PRIMARY,
                  fontWeight: isActive(link.href) ? 700 : 500,
                  fontSize: '1.45rem',
                  px: 2, py: 1,
                  borderRadius: '6px',
                  bgcolor: isActive(link.href) ? DARK : 'transparent',
                  '&:hover': { bgcolor: DARK, color: '#fff' },
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
                  display: { xs: 'none', md: 'flex' },
                  bgcolor: DARK, color: '#fff',
                  fontSize: '1.45rem', fontWeight: 700, px: 2.5, py: 1.2, borderRadius: '6px',
                  '&:hover': { bgcolor: PRIMARY },
                }}>
                {BUSINESS.phone}
              </Button>
              <IconButton onClick={() => setMobileOpen(true)}
                sx={{ display: { xs: 'flex', lg: 'none' }, color: DARK }} aria-label="Open menu">
                <MenuIcon sx={{ fontSize: '2.8rem' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#fff' } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: DARK, color: '#fff' }}>
          <Box sx={{ position: 'relative', width: 140, height: 40 }}>
            <Image src={BUSINESS.logo} alt="Goulburn Radiology" layout="fill" objectFit="contain" objectPosition="left center" />
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)}
                selected={isActive(link.href)}
                sx={{ py: 1.5, px: 3, '&.Mui-selected': { bgcolor: BG, color: DARK, fontWeight: 700 } }}>
                <ListItemText primary={link.label}
                  primaryTypographyProps={{ fontSize: '1.6rem', fontWeight: isActive(link.href) ? 700 : 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 3, mt: 'auto', borderTop: '1px solid #eee' }}>
          <Button fullWidth variant="contained" href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: DARK, fontSize: '1.5rem', py: 1.5, borderRadius: '6px' }}>
            {BUSINESS.phone}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
