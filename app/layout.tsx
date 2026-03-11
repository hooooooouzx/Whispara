import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whispara - The Cognitive Perception Engine",
  description: "Capture the Whisper, Follow the Shadow. The world's first true Intent Router.",
  keywords: ["notes", "AI", "intent router", "cognitive engine", "productivity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
