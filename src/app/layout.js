import { Poppins } from 'next/font/google'
import Header from 'components/shared/Header'
import 'styles/global.scss'
import 'styles/null.scss'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'ITECHIE',
  description: 'Tech online store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
