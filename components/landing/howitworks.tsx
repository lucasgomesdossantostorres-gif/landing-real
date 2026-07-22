const steps = [
  {
    number: "01",
    title: "Escolha a questão",
    text: "O usuário acessa a interface e responde a questão discursiva dentro da própria plataforma.",
  },
  {
    number: "02",
    title: "Envie a resposta",
    text: "A resposta entra em um fluxo estruturado de correção, preparado para analisar além de um simples prompt.",
  },
  {
    number: "03",
    title: "Receba o feedback",
    text: "A plataforma entrega um retorno completo com potências, pontos de atenção e simulação de desempenho.",
  },
  {
    number: "04",
    title: "Use para evoluir",
    text: "O agente especialista e o dashboard ajudam o candidato a consolidar rotina, revisar falhas e acompanhar progresso.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Da prática ao feedback realmente útil.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A proposta é simples: transformar treino discursivo em evolução real,
            com um fluxo de correção pensado para o candidato praticar com muito
            mais constância.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <p className="text-sm font-bold text-indigo-300">{step.number}</p>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}