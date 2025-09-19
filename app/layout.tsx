import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ThemeProvider from "@/lib/utils/ThemeProvider";

export const metadata: Metadata = {
  title: "dev.sh | Portfolio",
  description: "This is my personal portfoloi where i used Mac Styled UI.",
  robots: "index, follow",
  openGraph: {
    title: "dev.sh | Portfolio",
    description: "Mac-styled portfolio for dev.sh.",
    url: "https://shivam.cc",
    type: "website",
    images: [
      {
        url: "https://shivam.cc/og-image.jpg", // 🔁 Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dev.sh | Portfolio",
    description: "Mac-styled portfolio for dev.sh.",
    images: ["https://shivam.cc/og-image.jpg"], // 🔁 Replace with your actual image
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shivam Durgude",
              url: "https://shivam.cc", // 🔁 Replace with your actual URL
              sameAs: [
                "https://github.com/sd191100",
                "https://www.linkedin.com/in/shivam-durgude",
              ],
              jobTitle: "AI-Focused Full-Stack Developer",
              description:
                "Portfolio of Shivam Durgude, a full-stack developer and Devops Engineer.",
            }),
          }}
        />
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
