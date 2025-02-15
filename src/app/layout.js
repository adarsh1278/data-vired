'use client';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import './globals.css';
import toast, { Toaster } from 'react-hot-toast';
import Check from '@/utils/validateToken';
import About from '@/app/about/page'
// Load local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Toaster/>
        <div>
          hi
        </div>
        {children}
      </body>
    </html>
  );
}
