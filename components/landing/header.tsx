import Image from "next/image";

const signupUrl = "https://app.simplesaprova.com.br/cadastro";
const loginUrl = "https://app.simplesaprova.com.br/login";

const navigation = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sistema", href: "#sistema" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12 xl:px-16">
        <a href="#" className="flex shrink-0 items-center gap-3" aria-label="Ir para o início">
          <Image
            src="/images/Logo1.png"
            alt="Simples Aprova.AI"
            width={64}
            height={64}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />

          <div className="leading-tight">
            <p className="text-base font-bold tracking-[-0.02em] text-slate-950 sm:text-lg">
              Simples Aprova.AI
            </p>
            <p className="mt-0.5 hidden text-xs font-medium text-slate-500 sm:block">
              Correção por IA para concursos
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-10" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <a
            href={loginUrl}
            className="hidden min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 sm:inline-flex"
          >
            Entrar
          </a>
          <a
            href={signupUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2563eb] px-7 py-3 text-sm font-extrabold !text-white shadow-[0_10px_28px_rgba(37,99,235,0.30)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Começar agora
          </a>
        </div>
      </div>
    </header>
  );
}
