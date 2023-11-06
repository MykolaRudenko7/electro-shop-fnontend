import AuthProvider from 'components/AuthProvider'
import Footer from 'components/shared/Footer'
import Header from 'components/shared/Header'
import 'styles/global.scss'
import 'styles/null.scss'

export const metadata = {
  title: 'ITECHIE',
  description: 'Tech online store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
