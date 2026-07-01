import { CssBaseline } from '@mui/material';
import React, { ReactNode } from 'react';

import { SiteHeader } from '@src/components/templates/site-header/site-header';
import { SiteFooter } from '@src/components/templates/site-footer/site-footer';

interface SiteLayoutProps {
  children: ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <SiteHeader />
      <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
};
