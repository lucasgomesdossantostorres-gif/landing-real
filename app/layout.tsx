import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplesaprova.com.br"),

  title: {
  default: "Correção de Redação para Concursos | Simples Aprova.AI",
  template: "%s | Simples Aprova.AI",
},

description:
  "Corrija redações e respostas discursivas para concursos com feedback detalhado por inteligência artificial. Treine para provas Cebraspe e acompanhe sua evolução.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Simples Aprova.AI",
    description:
      "Correção de redações para concursos com feedback detalhado por inteligência artificial.",
    url: "https://simplesaprova.com.br",
    siteName: "Simples Aprova.AI",
    locale: "pt_BR",
    type: "website",
  },
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
