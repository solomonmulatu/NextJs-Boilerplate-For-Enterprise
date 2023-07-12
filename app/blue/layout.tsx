import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ border: '10px solid red' }}>{children}</div>;
}
