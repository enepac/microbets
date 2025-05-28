import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Micro-Bet Validator",
  description: "Rapid idea testing system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Script
          src="https://plausible.io/js/script.js"
          data-domain="microbets.dev"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
