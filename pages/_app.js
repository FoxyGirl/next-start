import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        height={5}
        startPosition={0.3}
        stopDelayMs={550}
        options={{
          easing: 'ease',
          speed: 500,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
