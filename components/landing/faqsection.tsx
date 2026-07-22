const faqs = [
  {
    question: "A plataforma corrige qualquer banca?",
    answer:
      "Neste momento, a proposta está focada na correção de questões discursivas orientadas ao padrão da banca Cebraspe.",
  },
  {
    question: "Por que o principal não é a nota?",
    answer:
      "Não. O núcleo do produto é o feedback completo, por que melhora o desempenho objetivamente. A nota aparece apenas como bônus, em formato de simulação de desempenho, apenas para referência.",
  },
  {
    question: "Por que isso é melhor do que só receber uma pontuação?",
    answer:
      "Porque o candidato precisa entender exatamente o que acertou, o que faltou e o que fazer na próxima prática. Só um número não resolve esse problema.",
  },
  {
    question: "Isso substitui completamente correções humanas?",
    answer:
      "A proposta é permitir prática frequente, rápida e escalável, reduzindo o custo e a demora do processo tradicional. O produto entrega autonomia e velocidade de treino.",
  },
  {
    question: "O agente especialista faz o quê?",
    answer:
      "Ele ajuda o usuário a discutir o resultado da correção, criar rotina, gerar questões de treino e montar flashcards para revisão.",
  },
  {
    question: "Posso acompanhar minha evolução?",
    answer:
      "Sim. A plataforma também oferece visualização de desempenho, progresso e pontos recorrentes de atenção, além do histórico de respostas",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Perguntas que o visitante precisa responder antes de converter.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}