"use client";

import "../styles/globals.css";
import { Header } from "../components/Header";
import { ReactQueryWrapper } from "../components/ReactQueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
