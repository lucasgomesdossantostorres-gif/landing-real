const features = [
  {
    title: "Feedback estruturado",
    text: "O principal valor não é a nota. É o diagnóstico completo, claro e acionável sobre a resposta.",
  },
  {
    title: "Potências e pontos de atenção",
    text: "O usuário entende exatamente o que fez bem e o que precisa corrigir nas próximas tentativas.",
  },
  {
    title: "Agente especialista",
    text: "O chatbot ajuda a discutir resultados, organizar rotina, gerar novas questões e criar flashcards.",
  },
  {
    title: "Dashboard de evolução",
    text: "Acompanhamento visual de progresso para transformar prática em estratégia de melhora contínua.",
  },
  {
    title: "Preparação escalável",
    text: "Mais velocidade e mais frequência de treino, sem depender do alto custo e da demora das correções tradicionais.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            O que o usuário recebe
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Um sistema pensado para evoluir o candidato, não apenas classificá-lo.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-sm font-bold text-indigo-700">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}