import "./globals.css";  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0F0F0F] text-white">
        <div className="flex h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
