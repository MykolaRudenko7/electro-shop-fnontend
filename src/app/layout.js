import { Poppins } from 'next/font/google'
import Footer from 'components/shared/Footer'
import Header from 'components/shared/Header'
import AuthContextProvider from 'providers/AuthContextProvider'
import 'styles/global.scss'
import 'styles/null.scss'

export const metadata = {
  title: 'ITECHIE',
  description: 'Tech online store',
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
      <AuthContextProvider>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  )
}
