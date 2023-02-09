import '@styles/global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       <meta charSet="UTF-8" />
       <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0" />
       <meta 
        name="author" 
        content="Fikri Ali Fata" />

       <link 
        rel="icon" 
        type="image/x-icon" 
        href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}