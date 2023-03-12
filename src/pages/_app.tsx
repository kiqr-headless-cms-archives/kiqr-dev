import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell } from '~organisms/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return <AppShell><Component {...pageProps} /></AppShell>
}
