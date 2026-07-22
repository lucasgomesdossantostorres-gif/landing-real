import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feedback por IA para discursivas Cebraspe",
  description:
    "Treine respostas discursivas da banca Cebraspe com feedback completo, pontuação simulada, agente especialista e gráfico de evolução.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}