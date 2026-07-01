import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { NAV_LINKS, BUSINESS } from '@src/lib/content';

export const SiteHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <Box
        sx={{
          bgcolor: '#0B4F82',
          color: '#fff',
          display: { xs: 'none', md: 'block' },
          py: 0.5,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, fontSize: '1.3rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: '1.5rem' }} />
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>
                {BUSINESS.phone}
              </a>
            </Box>
            <Box sx={{ opacity: 0.7 }}>Mon–Fri: 8:00am–5:30pm &nbsp;|&nbsp; Sat: 8:30am–12:30pm</Box>
          </Box>
        </Container>
      </Box>

      {/* Main nav */}
      <AppBar
        position="sticky"
        elevation={scrolled ? 3 : 0}
        sx={{
          bgcolor: scrolled ? '#fff' : '#fff',
          borderBottom: scrolled ? 'none' : '1px solid #e8eef5',
          transition: 'box-shadow 0.2s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: '6rem', md: '7rem' }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '10px',
                  bgcolor: '#0B4F82',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Box component="span" sx={{ color: '#fff', fontWeight: 800, fontSize: '2rem', fontFamily: 'inherit', lineHeight: 1 }}>G</Box>
              </Box>
              <Box>
                <Box sx={{ color: '#0B4F82', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                  Goulburn
                </Box>
                <Box sx={{ color: '#4A90D9', fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.4rem' }, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Radiology
                </Box>
              </Box>
            </Link>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: isActive(link.href) ? '#0B4F82' : '#414D63',
                      fontWeight: isActive(link.href) ? 700 : 500,
                      fontSize: '1.5rem',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      borderBottom: isActive(link.href) ? '2px solid #0B4F82' : '2px solid transparent',
                      '&:hover': { bgcolor: '#F0F7FF', color: '#0B4F82' },
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* CTA + mobile menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                startIcon={<PhoneIcon />}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  bgcolor: '#0B4F82',
                  color: '#fff',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#0a3d64' },
                }}
              >
                {BUSINESS.phone}
              </Button>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ display: { xs: 'flex', lg: 'none' }, color: '#0B4F82' }}
                aria-label="Open menu"
              >
                <MenuIcon sx={{ fontSize: '2.8rem' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#fff' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e8eef5' }}>
          <Box sx={{ color: '#0B4F82', fontWeight: 800, fontSize: '1.8rem' }}>Goulburn Radiology</Box>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                selected={isActive(link.href)}
                sx={{
                  py: 1.5,
                  px: 3,
                  '&.Mui-selected': { bgcolor: '#F0F7FF', color: '#0B4F82', fontWeight: 700 },
                }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: '1.6rem', fontWeight: isActive(link.href) ? 700 : 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 3, mt: 'auto', borderTop: '1px solid #e8eef5' }}>
          <Button
            fullWidth
            variant="contained"
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            startIcon={<PhoneIcon />}
            sx={{ bgcolor: '#0B4F82', fontSize: '1.5rem', py: 1.5, borderRadius: '8px' }}
          >
            {BUSINESS.phone}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
