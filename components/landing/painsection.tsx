const painCards = [
  {
    title: "A segunda fase decide",
    text: "Muita gente chega bem até a prova discursiva, mas perde competitividade justamente na fase que mais exige prática de qualidade.",
  },
  {
    title: "Auto correção é inviável",
    text: "O gabarito discursivo é complexo. Sozinho, o candidato raramente consegue enxergar com precisão lacunas, omissões e falhas de estrutura.",
  },
  {
    title: "O mercado é caro e lento",
    text: "Correções humanas com professores são valiosas, mas muitas vezes custosas e demoradas para quem precisa praticar com frequência.",
  },
];

const questions = [
  "Respondi tudo o que foi pedido?",
  "Minha fundamentação ficou suficiente?",
  "Faltei em algum ponto do espelho?",
  "Onde exatamente perdi desempenho?",
  "Minha estrutura está ajudando ou atrapalhando?",
  "O que devo corrigir na próxima resposta?",
];

export default function PainSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            A dor central
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Você pratica. Espera dias. Mas tem feedback raso e complexo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            O problema não é só escrever. O problema é treinar com critério,
            velocidade e clareza sobre o que melhorar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">
            As dúvidas que travam a prática
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {questions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}