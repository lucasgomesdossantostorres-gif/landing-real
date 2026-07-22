const signupUrl = "https://app.seudominio.com.br/cadastro";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[36px] bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-14 text-white shadow-2xl md:px-14">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-100">
            
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            A prática aprova. O feedback acelera.
          </h2>
          <p className="mt-5 text-lg leading-8 text-indigo-50">
            Se a segunda fase decide, treinar com qualidade não pode ser opcional.
            Envie sua resposta, receba um feedback completo e transforme cada
            tentativa em evolução real.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={signupUrl}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-indigo-700 shadow-lg transition hover:bg-slate-100"
            >
              Analisar minha primeira resposta
            </a>
            <a
              href="#sistema"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
            >
              Ver o sistema por dentro
            </a>
          </div>

          <p className="mt-4 text-sm text-indigo-100">
            Serviço focado em feedback para discursivas Cebraspe. A nota é uma
            simulação de desempenho e não o produto principal.
          </p>
        </div>
      </div>
    </section>
  );
}