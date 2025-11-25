import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HydroFlow Pumps",
  description:
    "Premium water pumps engineered for efficiency, durability, and smart control.",
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
