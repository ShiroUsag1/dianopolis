import localFont from 'next/font/local';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gupter.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
