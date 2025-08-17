import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Work_Sans } from 'next/font/google'

const clashDisplay = localFont({
  src: '../fonts/ClashDisplay-Variable.woff2',
  display: 'swap', // ensures text shows immediately with fallback
  variable: '--font-clash', // makes it available as a CSS variable
  weight: '100 900', // variable font range
  style: 'normal',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work',
})
export const metadata: Metadata = {
  title: "Humtran",
  description: "Empowering minds & driving transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
