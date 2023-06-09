import '../../styles/globals.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

const IkarosRegular = localFont({
  variable: '--ikaros-regular',
  src: '../../public/fonts/Ikaros-Regular.otf',
  display: 'swap'
})

const InterVariable = Inter({
  variable: '--inter-variable',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${IkarosRegular.variable}`}>
      
      <body className='max-w-7xl mx-auto dark:bg-[#242424]'>
      <Header />
      <Banner />
        {children}
        </body>
    </html>
  )
}
