// Modules
import { FC } from 'react';
import type { AppProps } from 'next/app';

// Styles
import '@css/main.css';
import '@css/fonts.css';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
