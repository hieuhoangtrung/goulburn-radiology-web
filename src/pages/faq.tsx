import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from 'next/head';

import { NextPage } from 'next';
import { useState } from 'react';

import { FAQS, BUSINESS } from '@src/lib/content';

const FAQPage: NextPage = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Goulburn Radiology</title>
        <meta name="description" content="Answers to common questions about medical imaging at Goulburn Radiology — bulk billing, referrals, preparation, results, MRI safety and more." />
      </Head>

      {/* Hero */}
      <Box sx={{ bgcolor: '#F7FAFD', borderBottom: '1px solid #E2EAF4', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Chip label="Patient Information" sx={{ bgcolor: '#E8F0FB', color: '#0B4F82', fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
          <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: '#0B2747', mb: 2, letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', maxWidth: 620 }}>
            Everything you need to know about your visit to Goulburn Radiology.
          </Typography>
        </Container>
      </Box>

      {/* FAQ accordion */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              {FAQS.map((faq, i) => (
                <Accordion
                  key={i}
                  expanded={expanded === i}
                  onChange={() => setExpanded(expanded === i ? false : i)}
                  elevation={0}
                  sx={{
                    mb: 1.5,
                    border: '1px solid',
                    borderColor: expanded === i ? '#4A90D9' : '#E2EAF4',
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    transition: 'border-color 0.2s',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#0B4F82' }} />}
                    sx={{ px: 3, py: 1, '& .MuiAccordionSummary-content': { my: 1.5 } }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62', lineHeight: 1.75 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: 100 }}>
                <Box sx={{ p: 4, bgcolor: '#0B4F82', borderRadius: '14px', color: '#fff', mb: 3 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '2rem', mb: 1.5 }}>Still have questions?</Typography>
                  <Typography sx={{ fontSize: '1.5rem', color: '#C8D8EB', mb: 3, lineHeight: 1.65 }}>
                    Our friendly reception team is happy to help with any queries about your appointment or services.
                  </Typography>
                  <Button
                    fullWidth
                    href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{ bgcolor: '#fff', color: '#0B4F82', fontWeight: 700, fontSize: '1.6rem', py: 1.8, borderRadius: '8px', mb: 1.5, '&:hover': { bgcolor: '#e8f0fe' } }}
                  >
                    {BUSINESS.phone}
                  </Button>
                  <Button
                    href="/contact"
                    fullWidth
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', fontSize: '1.5rem', py: 1.5, borderRadius: '8px', '&:hover': { borderColor: '#fff' } }}
                  >
                    Send a Message
                  </Button>
                </Box>
                <Box sx={{ p: 3.5, bgcolor: '#F7FAFD', border: '1px solid #E2EAF4', borderRadius: '14px' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: '#0B2747', mb: 2 }}>Quick Links</Typography>
                  {[
                    { label: 'View all services', href: '/services' },
                    { label: 'About our practice', href: '/about' },
                    { label: 'For referrers', href: '/referrers' },
                    { label: 'Find us', href: '/contact' },
                  ].map(link => (
                    <a href={link.href} key={link.href}  style={{ textDecoration: 'none' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 1.2, color: '#0B4F82', fontSize: '1.5rem', fontWeight: 600, borderBottom: '1px solid #E2EAF4', '&:hover': { color: '#1A6FAD' } }}>
                        <ArrowForwardIcon sx={{ fontSize: '1.6rem' }} /> {link.label}
                      </Box>
                    </a>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FAQPage;
