import "./globals.css";

import { Noto_Sans_JP } from "next/font/google";
import { Footer } from "./footer";

export { metadata, viewport } from "./metadata";

const font = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
