import { NhostClient, NhostNextProvider } from '@nhost/nextjs';
import { AppProps } from 'next/app';

import { UserProvider } from '../user-provider';
import './styles.css';

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || '',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </NhostNextProvider>
  );
}

export default CustomApp;
