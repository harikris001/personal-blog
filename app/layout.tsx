import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/app/components/NavBar";

const poppins = Poppins({
  variable: "--font-poppins",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BlogVerse",
  description:
    "A blog platform for sharing thoughts and ideas. Go Creative and Inspiring",
  icons: {
    icon: [{ url: "/android-chrome-512x512.png" }],
    apple: "/apple-touch-icon.png", // Optional: for Apple devices
  },
};

import { Provider } from "@/app/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen`}>
        <Provider>
          <header className="sticky top-0 left-0 z-50">
            <NavBar />
          </header>

          {children}
        </Provider>
      </body>
    </html>
  );
}
