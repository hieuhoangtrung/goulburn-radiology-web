import { Box, Chip, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// FAQ content is on Patient Information page
const FAQPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => { router.replace('/patient-information'); }, [router]);
  return null;
};
export default FAQPage;
