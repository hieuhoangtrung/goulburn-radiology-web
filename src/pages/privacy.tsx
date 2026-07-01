import { Box, Container, Chip, Typography } from '@mui/material';
import Head from 'next/head';
import { NextPage } from 'next';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const PrivacyPage: NextPage = () => (
  <>
    <Head>
      <title>Privacy Policy | Goulburn Radiology</title>
      <meta name="description" content="Goulburn Radiology Privacy Policy — how we collect, use and protect your personal and health information." />
    </Head>
    <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Chip label="Legal" sx={{ bgcolor: '#EAEAEA', color: BRAND.dark, fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: BRAND.dark }}>Privacy Policy</Typography>
      </Container>
    </Box>
    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 9 } }}>
      <Container maxWidth="md">
        {[
          { title: '1. About This Policy', body: 'Goulburn Radiology is committed to protecting your privacy and handling your personal and health information in accordance with the Privacy Act 1988 (Cth) and applicable NSW health privacy legislation.' },
          { title: '2. Information We Collect', body: 'We collect personal information including your name, date of birth, contact details, Medicare number, health fund details, and health information including referrals and imaging results.' },
          { title: '3. How We Use Your Information', body: 'We use your information to provide diagnostic imaging services, communicate results to your referring doctor, process Medicare and health fund claims, and comply with legal obligations.' },
          { title: '4. Electronic Image Delivery', body: 'We offer secure, password-protected electronic copies of your imaging results. These are provided directly to you and your nominated treating doctor.' },
          { title: '5. Disclosure', body: 'We may disclose your information to your referring doctor or treating specialist, Medicare and your health fund, and where required by law. We do not sell your information.' },
          { title: '6. Access and Correction', body: 'You have the right to access and request correction of your personal information. Please contact us on 02 4821 4666.' },
          { title: '7. Complaints', body: 'If you have a concern, please contact us directly. You may also contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.' },
        ].map(s => (
          <Box key={s.title} sx={{ mb: 5 }}>
            <Typography component="h2" sx={{ fontSize: '2.2rem', fontWeight: 700, color: BRAND.dark, mb: 1.5 }}>{s.title}</Typography>
            <Typography sx={{ fontSize: '1.65rem', color: '#3A4E62', lineHeight: 1.8 }}>{s.body}</Typography>
          </Box>
        ))}
      </Container>
    </Box>
  </>
);
export default PrivacyPage;
