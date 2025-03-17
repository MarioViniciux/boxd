import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-500 p-2 flex flex-col items-center w-full min-h-screen">
        <Header />
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
