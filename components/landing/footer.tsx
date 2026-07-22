import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <a href="#" className="inline-flex items-center gap-3">
            <Image
              src="/images/Logo1.png"
              alt="Logo da Simples Aprova.IA"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />

            <div>
              <p className="text-base font-semibold text-slate-900">
                Simples Aprova.IA
              </p>

              <p className="text-xs text-slate-500">
                Feedback para discursivas Cebraspe
              </p>
            </div>
          </a>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Plataforma de apoio para treinamento de respostas discursivas, com
            foco em feedback completo, Mentor IA e acompanhamento da evolução
            do candidato.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navegação
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <a
              href="#como-funciona"
              className="block hover:text-slate-900"
            >
              Como funciona
            </a>

            <a
              href="#sistema"
              className="block hover:text-slate-900"
            >
              Sistema
            </a>

            <a
              href="#metodologia"
              className="block hover:text-slate-900"
            >
              Metodologia
            </a>

            <a
              href="#planos"
              className="block hover:text-slate-900"
            >
              Planos
            </a>

            <a
              href="#faq"
              className="block hover:text-slate-900"
            >
              Dúvidas
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Aviso importante
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            A plataforma é independente e não possui vínculo institucional com
            a banca Cebraspe. O foco do serviço é o feedback. A pontuação,
            quando exibida, deve ser interpretada como uma simulação educacional
            de desempenho.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Simples Aprova.IA. Todos os direitos
          reservados.
        </p>

        <div className="space-y-3">
  <p className="font-semibold text-slate-900">Legal</p>

  <div className="flex flex-col gap-2 text-sm text-slate-600">
    <Link href="/termos-de-uso">
      Termos de Uso
    </Link>

    <Link href="/politica-de-privacidade">
      Política de Privacidade
    </Link>

    <Link href="/politica-de-cookies">
      Política de Cookies
    </Link>

    <Link href="/cancelamento-e-reembolso">
      Cancelamento e Reembolso
    </Link>

    <Link href="/uso-de-inteligencia-artificial">
      Uso de Inteligência Artificial
    </Link>

    <Link href="/pontuacao-estimada">
      Pontuação Estimada
    </Link>
  </div>
        </div>
      </div>
    </footer>
  );
}