import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-500 p-2">
        <Header />
        {children}
      </body>
    </html>
  );
}
