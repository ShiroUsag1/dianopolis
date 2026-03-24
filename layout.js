import localFont from 'next/font/local';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'

const inter = localFont({
  src: './fonts/Inter-Regular.ttf',
  variable: '--font-inter',
});
const gupter = localFont({
  src: './fonts/Gupter-Bold.ttf',
  variable: '--font-gupter',
});
const lato = localFont({
  src: './fonts/Lato-Bold.ttf',
  variable: '--font-lato',
});

const oswald = localFont({
  src: './fonts/Oswald-Bold.ttf',
  variable: '--font-oswald',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gupter.variable} ${lato.variable} ${oswald.variable}`}>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
