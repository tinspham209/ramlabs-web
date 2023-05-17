import '../globals.css';

export const metadata = {
  title: 'Admin | RAM Labs',
  description: 'Admin | RAM Labs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
