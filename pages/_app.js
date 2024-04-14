// pages/_app.js
import { useEffect } from 'react';
import { connectToDatabase } from '../lib/mongo';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    connectToDatabase();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
