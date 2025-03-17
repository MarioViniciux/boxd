import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-600 rounded-2xl flex flex-col w-[104rem] min-h-[28rem] p-2">
      {children}
    </div>
  );
}
