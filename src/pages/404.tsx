import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

import { BUSINESS } from '@src/lib/content';

const NotFoundPage: NextPage = () => (
  <>
    <Head>
      <title>Page Not Found | Goulburn Radiology</title>
    </Head>
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#F7FAFD',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
        <Typography sx={{ fontSize: '10rem', fontWeight: 800, color: '#E2EAF4', lineHeight: 1 }}>404</Typography>
        <Typography component="h1" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: '#0B2747', mt: 2, mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', mb: 5, maxWidth: 480, mx: 'auto' }}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Try navigating from the home page or contact us directly.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{ bgcolor: '#0B4F82', fontSize: '1.6rem', px: 4, py: 1.8, borderRadius: '10px', '&:hover': { bgcolor: '#0a3d64' } }}
          >
            Back to Home
          </Button>
          <Button
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            variant="outlined"
            startIcon={<PhoneIcon />}
            sx={{ color: '#0B4F82', borderColor: '#0B4F82', fontSize: '1.6rem', px: 4, py: 1.8, borderRadius: '10px' }}
          >
            {BUSINESS.phone}
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFoundPage;
