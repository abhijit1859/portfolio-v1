import "./globals.css"
 
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-google-sans",
})

export const metadata = {
  title: "Abhijit Kumar",
  description: "Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         
          {children}
  
      </body>
    </html>
  )
}