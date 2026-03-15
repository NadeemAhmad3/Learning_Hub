import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learning Hub | Master Your Tech Skills",
  description: "A comprehensive, interactive platform for learning web development, modern frameworks, and programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">  
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-400 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
