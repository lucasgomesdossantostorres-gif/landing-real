import Image from "next/image";
import AnimatedCounter from "./animated-counter";

const signupUrl = "https://app.simplesaprova.com.br/cadastro";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-indigo-100/80 bg-[linear-gradient(115deg,#f3f8ff_0%,#eef2ff_42%,#e6fbff_100%)]">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1560px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-24">
          <div className="max-w-165">
            <div className="mb-6 inline-flex items-center rounded-xl border border-indigo-200 bg-white/80 px-4 py-2.5 text-sm font-bold text-indigo-700 shadow-sm backdrop-blur">
              Feedback inteligente para discursivas Cebraspe
            </div>

            <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[60px] xl:text-[68px]">
              A prática aprova.
              <span className="mt-1 block bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                O feedback acelera.
              </span>
            </h1>

            <p className="mt-7 max-w-155 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              Envie sua resposta discursiva e receba, em até 2 minutos, uma análise completa sobre conteúdo, estrutura, argumentação e atendimento ao enunciado.
            </p>

            <p className="mt-4 max-w-150 text-base leading-7 text-slate-600 sm:text-lg">
              Entenda seus pontos fortes, identifique o que precisa melhorar e treine com direção para a próxima prova.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={signupUrl}
                className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-[#2563eb] px-9 py-4 text-base font-extrabold !text-white shadow-[0_16px_38px_rgba(37,99,235,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                Analisar minha primeira resposta
              </a>

              <span className="text-sm font-semibold text-slate-600">
                Comece gratuitamente
              </span>
            </div>

            <p className="mt-5 max-w-147.5 text-xs leading-5 text-slate-500 sm:text-sm">
              Correção especializada em questões discursivas Cebraspe. A pontuação apresentada é uma estimativa educacional de desempenho.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-205 lg:mx-0 lg:ml-auto">
            <div className="absolute -left-4 top-8 z-20 hidden rounded-xl border border-indigo-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block xl:-left-10">
              <p className="text-xs font-bold text-indigo-600">ANÁLISE COMPLETA</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">Conteúdo, linguagem e estrutura</p>
            </div>

            <div className="absolute -bottom-5 right-4 z-20 hidden rounded-xl border border-cyan-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block xl:right-8">
              <p className="text-xs font-bold text-cyan-700">FEEDBACK RÁPIDO</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">Resultado em até 2 minutos</p>
            </div>

            <div className="rounded-[30px] border border-white/90 bg-white/75 p-2.5 shadow-[0_35px_90px_rgba(30,41,59,0.22)] backdrop-blur-sm sm:p-4 lg:rotate-[0.5deg]">
              <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-950">
                <Image
                  src="/images/Feedback1.png"
                  alt="Tela da plataforma Simples Aprova.AI mostrando o feedback de uma resposta discursiva"
                  width={1400}
                  height={850}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-auto w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-16 lg:max-w-245">
          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-white/90 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg font-extrabold text-indigo-700">
              01
            </div>
            <div>
              <p className="font-bold text-slate-950">Foco na banca</p>
              <p className="mt-1 text-sm leading-5 text-slate-600">Análise orientada aos critérios da Cebraspe</p>
            </div>
          </div>

          <div className="flex min-h-28 items-center gap-4 rounded-2xl border border-white/90 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg font-extrabold text-violet-700">
              02
            </div>
            <div>
              <p className="font-bold text-slate-950">Feedback completo</p>
              <p className="mt-1 text-sm leading-5 text-slate-600">Pontos fortes, atenção e próximos passos</p>
            </div>
          </div>

          <div className="flex min-h-28 items-center gap-5 rounded-[28px] bg-linear-to-r from-indigo-600 to-violet-600 p-7 shadow-lg shadow-indigo-600/20">
  <p className="shrink-0 text-3xl font-extrabold tracking-tight text-white">
    <AnimatedCounter end={1032} />
  </p>

  <p className="text-base font-bold leading-6 text-white">
    respostas discursivas analisadas
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
