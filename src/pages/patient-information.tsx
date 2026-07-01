import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import Head from 'next/head';
import { NextPage } from 'next';
import { useState } from 'react';
import { FAQS, BUSINESS } from '@src/lib/content';

const BRAND = { dark: '#1B273A', mid: '#414D63', light: '#F4F4F4', bg: '#F8F8F8' };

const PatientInfoPage: NextPage = () => {
  const [expanded, setExpanded] = useState<number | false>(0);
  return (
    <>
      <Head>
        <title>Patient Information | Goulburn Radiology</title>
        <meta name="description" content="Patient information for Goulburn Radiology — how to prepare for your scan, opening hours, bulk billing details, and what to bring. Call 02 4821 4666." />
      </Head>
      <Box sx={{ bgcolor: BRAND.bg, borderBottom: '1px solid #EAEAEA', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Chip label="Patient Information" sx={{ bgcolor: '#EAEAEA', color: BRAND.dark, fontWeight: 600, mb: 2, fontSize: '1.3rem' }} />
          <Typography component="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.2rem' }, fontWeight: 800, color: BRAND.dark, mb: 2 }}>
            Patient Information
          </Typography>
          <Typography sx={{ fontSize: '1.8rem', color: BRAND.mid, maxWidth: 620 }}>
            Everything you need to know before, during and after your appointment at Goulburn Radiology.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#fff', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              {/* Preparing section */}
              <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 3 }}>
                Preparing for Your Appointment
              </Typography>
              <Typography sx={{ fontSize: '1.7rem', color: '#3A4E62', lineHeight: 1.8, mb: 4 }}>
                At the time of your booking, our staff will explain how to prepare for your test or scan. Should you have further questions, please call us on <strong>{BUSINESS.phone}</strong>.
              </Typography>

              {/* What to bring */}
              <Box sx={{ p: 4, bgcolor: BRAND.bg, border: '1px solid #EAEAEA', borderRadius: '12px', mb: 5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '2rem', color: BRAND.dark, mb: 2 }}>What to Bring</Typography>
                {[
                  'Your referral form from your GP or specialist',
                  'Medicare card (required for bulk billing)',
                  'Health fund card (if applicable)',
                  'Any previous imaging or radiology reports',
                  'A list of current medications if relevant',
                ].map(item => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: BRAND.dark, mt: 1.2, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              {/* FAQ accordion */}
              <Typography component="h2" sx={{ fontSize: '2.4rem', fontWeight: 800, color: BRAND.dark, mb: 3 }}>
                Frequently Asked Questions
              </Typography>
              {FAQS.map((faq: import('@src/lib/content').FAQ, i: number) => (
                <Accordion key={i} expanded={expanded === i} onChange={() => setExpanded(expanded === i ? false : i)}
                  elevation={0}
                  sx={{ mb: 1.5, border: '1px solid', borderColor: expanded === i ? BRAND.mid : '#EAEAEA', borderRadius: '10px !important', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: BRAND.dark }} />}
                    sx={{ px: 3, '& .MuiAccordionSummary-content': { my: 1.5 } }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: BRAND.dark }}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography sx={{ fontSize: '1.6rem', color: '#3A4E62', lineHeight: 1.75 }}>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: 100 }}>
                <Box sx={{ p: 4, bgcolor: BRAND.dark, borderRadius: '12px', color: '#fff', mb: 3 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '2rem', mb: 1.5 }}>Book Your Appointment</Typography>
                  <Typography sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.75)', mb: 3, lineHeight: 1.65 }}>
                    Call us during business hours to book. Our staff will explain preparation requirements at the time of booking.
                  </Typography>
                  <Button fullWidth href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{ bgcolor: '#fff', color: BRAND.dark, fontWeight: 700, fontSize: '1.6rem', py: 1.8, borderRadius: '8px', '&:hover': { bgcolor: BRAND.light } }}>
                    {BUSINESS.phone}
                  </Button>
                  <Typography sx={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.55)', mt: 1.5, textAlign: 'center' }}>
                    Monday – Friday, 8:30 am – 5:00 pm
                  </Typography>
                </Box>
                <Box sx={{ p: 3.5, bgcolor: BRAND.bg, border: '1px solid #EAEAEA', borderRadius: '12px' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.7rem', color: BRAND.dark, mb: 2 }}>Opening Hours</Typography>
                  {BUSINESS.hours.map((h: { days: string; hours: string }) => (
                    <Box key={h.days} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, pb: 1.5, borderBottom: '1px solid #EAEAEA' }}>
                      <Typography sx={{ fontSize: '1.5rem', color: BRAND.mid }}>{h.days}</Typography>
                      <Typography sx={{ fontSize: '1.5rem', color: BRAND.dark, fontWeight: 700 }}>{h.hours}</Typography>
                    </Box>
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

export default PatientInfoPage;
