import { Box, Container, Typography, Chip } from '@mui/material';
import Head from 'next/head';
import { NextPage } from 'next';

const PrivacyPage: NextPage = () => (
  <>
    <Head>
      <title>Privacy Policy | Goulburn Radiology</title>
      <meta name="description" content="Goulburn Radiology Privacy Policy — how we collect, use and protect your personal and health information." />
    </Head>

    <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Chip label="Legal" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
        <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: '#0B2747', letterSpacing: '-0.02em' }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ fontSize: '1.5rem', color: '#5A6E84', mt: 1 }}>Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
      </Container>
    </Box>

    <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 9 } }}>
      <Container maxWidth="md">
        {[
          {
            title: '1. About This Policy',
            body: 'Goulburn Radiology ("we", "our", "us") is committed to protecting your privacy and handling your personal and health information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), as well as applicable NSW health privacy legislation.',
          },
          {
            title: '2. Information We Collect',
            body: 'We collect personal information including your name, date of birth, contact details, Medicare number, health fund details, and health information including referrals, imaging results and medical history. This information is collected directly from you, your referring doctor, or health fund.',
          },
          {
            title: '3. How We Use Your Information',
            body: 'We use your information to provide diagnostic imaging services, communicate your results to your referring doctor, process Medicare and health fund claims, maintain accurate medical records, and comply with legal and regulatory obligations.',
          },
          {
            title: '4. Disclosure of Your Information',
            body: 'We may disclose your information to your referring doctor or treating specialist, Medicare and your health fund, other healthcare providers involved in your care, and where required by law. We do not sell or share your information for marketing purposes.',
          },
          {
            title: '5. Storage and Security',
            body: 'Your information is stored securely in our electronic medical records system with access restricted to authorised staff. We retain medical records in accordance with applicable legislation.',
          },
          {
            title: '6. Access and Correction',
            body: 'You have the right to access and request correction of your personal information. Please contact our Practice Manager at admin@goulburnradiology.com.au or (02) 4821 5733.',
          },
          {
            title: '7. Complaints',
            body: 'If you have a concern about how we handle your information, please contact us in the first instance. You may also contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.',
          },
        ].map(section => (
          <Box key={section.title} sx={{ mb: 5 }}>
            <Typography component="h2" sx={{ fontSize: '2.2rem', fontWeight: 700, color: '#0B2747', mb: 1.5 }}>{section.title}</Typography>
            <Typography sx={{ fontSize: '1.65rem', color: '#3A4E62', lineHeight: 1.8 }}>{section.body}</Typography>
          </Box>
        ))}
      </Container>
    </Box>
  </>
);

export default PrivacyPage;
