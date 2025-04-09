import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ThemeProvider from "@/lib/utils/ThemeProvider";

export const metadata: Metadata = {
  title: "dev.sh | Portfolio",
  description: "This is my personal portfoloi where i used Mac Styled UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon"  type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className="bg-[url(/back/purple.jpg)] dark:bg-[url(/back/green.jpg)]">
        <ThemeProvider>
          <div className="flex items-center justify-center h-screen backdrop-blur-sm bg-neutral-500/10 ">
            <div className="relative w-[1580px] h-[880px] bg-[url(/back/purple.jpg)] dark:bg-[url(/back/green.jpg)] bg-cover rounded-xl shadow-2xl border-10 border-gray-600 flex flex-col">
              <Navbar />
              <div className="flex-grow overflow-hidden">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
