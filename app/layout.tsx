import Navbar from "@/components/layout/Navbar"
import "./globals.css"
 
import { Outfit, Newsreader } from "next/font/google"

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Abhijit Kumar | Systems & Backend Engineer",
  description: "Personal portfolio of Abhijit Kumar, a backend engineer specializing in distributed systems, Go, Node.js, and AI infrastructure.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}