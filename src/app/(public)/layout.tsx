import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Body from "../components/Body/Body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Drizzle-Auth",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/4f00a527b1.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <Body>{children}</Body>
    </html>
  );
}
