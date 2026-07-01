import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GoogleTagManager } from '@next/third-parties/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';

import { SiteLayout } from '@src/components/templates/site-layout/site-layout';
import colorfulTheme from '@src/theme';
import { META, BUSINESS } from '@src/lib/content';

import 'maplibre-gl/dist/maplibre-gl.css';

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
      streetAddress: BUSINESS.addressStreet,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHours: ['Mo-Fr 08:00-17:30', 'Sa 08:30-12:30'],
    areaServed: BUSINESS.areaServed,
  };

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page: ReactElement) => <SiteLayout>{page}</SiteLayout>);

  return (
    <>
      <Head>
        <GoogleTagManager gtmId="GTM-KB5DZX7W" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <title key="title">{META.title}</title>
        <meta key="description" name="description" content={META.description} />
        <link key="canonical" rel="canonical" href={canonical} />
        <meta key="og:title" property="og:title" content={META.title} />
        <meta key="og:description" property="og:description" content={META.description} />
        <meta key="og:image" property="og:image" content={META.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonical} />
        <meta property="og:site_name" content={META.siteName} />
        <meta property="og:locale" content={META.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.image} />
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
