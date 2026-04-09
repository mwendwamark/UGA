import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utumishi Girls Academy | Gilgil, Nakuru County",
  description: "A centre of academic excellence and character formation for girls in the heart of the Rift Valley. Enrolling Form 1 students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
