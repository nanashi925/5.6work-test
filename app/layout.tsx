import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NANASHI ARCHIVE — 名那詩作品集",
  description: "名那詩のビジュアル作品を収めたオンラインアーカイブ。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
