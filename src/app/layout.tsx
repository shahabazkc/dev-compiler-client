import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Dev Compiler',
  description: 'A compiler for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
