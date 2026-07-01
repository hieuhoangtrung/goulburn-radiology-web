import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <>
    <Head>
      <title>{statusCode} Error | Goulburn Radiology</title>
    </Head>
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', bgcolor: '#F7FAFD' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
        <Typography sx={{ fontSize: '10rem', fontWeight: 800, color: '#E2EAF4', lineHeight: 1 }}>
          {statusCode}
        </Typography>
        <Typography component="h1" sx={{ fontSize: { xs: '2.8rem', md: '3.6rem' }, fontWeight: 800, color: '#0B2747', mt: 2, mb: 2 }}>
          {statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong'}
        </Typography>
        <Typography sx={{ fontSize: '1.8rem', color: '#5A6E84', mb: 5, maxWidth: 480, mx: 'auto' }}>
          {statusCode === 404
            ? "Sorry, the page you&apos;re looking for doesn't exist."
            : 'An unexpected error occurred. Please try again or contact us.'}
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{ bgcolor: '#0B4F82', fontSize: '1.6rem', px: 4, py: 1.8, borderRadius: '10px', '&:hover': { bgcolor: '#0a3d64' } }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  </>
);

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? 500 : 404;
  return { statusCode };
};

export default ErrorPage;
