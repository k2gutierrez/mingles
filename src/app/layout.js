import './globals.css'
import 'sf-font'
import "bootstrap/dist/css/bootstrap.min.css"
import ImportBootstrap from '../../components/ImportBootstrap'
import NavBar from '../../components/NavBar'

export const metadata = {
  title: 'Mingles',
  description: 'Lets buy a tequila distillery together!',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <NavBar />
          {children}
          <ImportBootstrap />
      </body>
    </html>
  )
}
