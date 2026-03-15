import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIエージェント設定代行 | OpenClaw・Claude・Claude Code 導入支援",
  description: "OpenClaw、Claude、Claude CodeなどのAIエージェント設定を代行します。技術に詳しくない方でも安心してAI秘書を導入できるよう、丁寧にサポートいたします。",
  keywords: ["AIエージェント", "設定代行", "OpenClaw", "Claude", "Claude Code", "AI秘書", "導入支援", "自動化"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
