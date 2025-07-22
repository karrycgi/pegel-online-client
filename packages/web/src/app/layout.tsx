import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello CGI!",
  description: "Test Page for testing deploy processes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
