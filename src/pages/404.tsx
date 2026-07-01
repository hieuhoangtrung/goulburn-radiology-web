import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Head from 'next/head';
import { NextPage } from 'next';
const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };
const NotFoundPage: NextPage = () => (
  <>
    <Head><title>404 | Goulburn Radiology</title></Head>
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', bgcolor: BRAND.bg }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
        <Typography sx={{ fontSize: '10rem', fontWeight: 800, color: '#EAEAEA', lineHeight: 1 }}>404</Typography>
        <Typography component="h1" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: BRAND.dark, mt: 2, mb: 2 }}>
          We were not able to locate the content you were looking for
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, mb: 3 }}>Please check the URL for possible typos.</Typography>
        <Button href="/" variant="contained" startIcon={<ArrowBackIcon />}
          sx={{ bgcolor: BRAND.dark, fontSize: '1.6rem', px: 4, py: 1.8, borderRadius: '8px' }}>
          Back to Home
        </Button>
      </Container>
    </Box>
  </>
);
export default NotFoundPage;
