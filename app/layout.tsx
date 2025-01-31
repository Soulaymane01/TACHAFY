import './globals.css'
import { Tajawal, Roboto } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'موقع العلاج النفسي | Psychotherapy Website',
  description: 'دليلك الكامل لتجاوز الألم وتحقيق السلام الداخلي | Your complete guide to overcoming pain and achieving inner peace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} ${roboto.className}`}>{children}</body>
    </html>
  )
}

