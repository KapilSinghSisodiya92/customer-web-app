import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans p-6 bg-gray-50">{children}</body>
    </html>
  );
}