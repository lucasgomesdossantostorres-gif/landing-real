import Image from "next/image";

const signupUrl = "https://app.seudominio.com.br/cadastro";
const loginUrl = "https://app.seudominio.com.br/login";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <Image
          src="/images/Logo1.png"
          alt="Logo da plataforma"
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
          priority
        />

        <div>
          <p className="text-sm font-semibold text-slate-900">
            Simples Aprova.IA
          </p>

          <p className="text-xs text-slate-500">
            Correção por IA para concursos
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Como funciona
        </a>
        <a href="#sistema" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Sistema
        </a>
        <a href="#metodologia" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Metodologia
        </a>
        <a
          href="#planos"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          Planos
        </a>
        <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Dúvidas
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={loginUrl}
          className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
        >
          Entrar
        </a>
        <a
          href={signupUrl}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
        >
          Começar agora
        </a>
      </div>
    </header>
  );
}