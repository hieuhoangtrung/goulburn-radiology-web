import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';
import { SiteLayout } from '@src/components/templates/site-layout/site-layout';
import colorfulTheme from '@src/theme';
import { META, BUSINESS } from '@src/lib/content';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const canonical = `${META.url}${(router.asPath || '/').split('?')[0]}`.replace(/\/$/, '') || META.url;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': BUSINESS.type,
    name: META.siteName,
    description: META.description,
    url: META.url,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
    openingHours: ['Mo-Fr 08:30-17:00'],
    areaServed: BUSINESS.areaServed,
  };

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page: ReactElement) => <SiteLayout>{page}</SiteLayout>);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <title key="title">{META.title}</title>
        <meta key="description" name="description" content={META.description} />
        <link key="canonical" rel="canonical" href={canonical} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={META.siteName} />
        <meta property="og:locale" content={META.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={colorfulTheme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default CustomApp;
