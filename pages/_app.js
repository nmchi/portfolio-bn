import Head from 'next/head';
import '../styles/globals.css';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

require('dotenv').config()

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Baron Nguyen</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://stijndv.com" />
        </Head>

        <Component {...pageProps} />

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
        />
    </>
);

export default MyApp