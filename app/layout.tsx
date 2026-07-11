import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio66 Photography",
  description:
    "Luxury Photography & Videography | Weddings | Baptisms | Events | Real Estate | Commercial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className="bg-[#090909] text-white antialiased"
      >
        {children}
      </body>
    </html>
  );
}
