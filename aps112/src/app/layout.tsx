import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OFC Compliance Checker',
  description: 'Verify AI-generated text against the Ontario Fire Code',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
