import Image from "next/image";
import AnimatedCounter from "./animated-counter";

const signupUrl = "https://app.seudominio.com.br/cadastro";

export default function Hero() {
  return (
    <section className="overflow-hidden px-6 pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              Feedback inteligente para discursivas Cebraspe
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl lg:text-[58px]">
              A prática aprova.
              <span className="block text-indigo-600">
                O feedback acelera.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Envie sua resposta discursiva e receba, em até 2 minutos, um
              feedback completo sobre conteúdo, estrutura, argumentação e
              atendimento ao enunciado.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              Descubra seus pontos fortes, identifique o que precisa de atenção
              e saiba como melhorar sua próxima resposta.
            </p>

            <div className="mt-8">
              <a
                href={signupUrl}
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Analisar minha primeira resposta
              </a>
            </div>

            <p className="mt-4 max-w-lg text-xs leading-5 text-slate-500">
              Correção especializada em questões discursivas Cebraspe. A
              pontuação é uma simulação educacional de desempenho.
            </p>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />
            <div className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative z-10 w-full max-w-130">
              <Image
                src="/images/Feedback1.png"
                alt="Tela real da plataforma mostrando o feedback de uma resposta discursiva"
                width={1000}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-4xl">
          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
              01
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Foco real
              </p>

              <p className="mt-1 text-sm leading-5 text-slate-600">
                Correção orientada à banca Cebraspe
              </p>
            </div>
          </div>

          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-lg font-bold text-violet-600">
              02
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Feedback completo
              </p>

              <p className="mt-1 text-sm leading-5 text-slate-600">
                Potências, atenção e próximos passos
              </p>
            </div>
          </div>

          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
            <p className="shrink-0 text-2xl font-bold tracking-tight text-indigo-700">
              <AnimatedCounter end={1032} />
            </p>

            <p className="text-sm font-semibold leading-5 text-slate-900">
              respostas discursivas analisadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}