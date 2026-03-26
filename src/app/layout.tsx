import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Compliance Checker', description: 'Check text against Ontario Fire Code' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ fontFamily: 'system-ui, sans-serif', background: '#fafafa', margin: 0 }}>{children}</body></html>;
}
