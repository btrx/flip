import '@/styles/globals.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
