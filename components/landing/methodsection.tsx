const levels = [
  {
    title: "Nível 1 · Leitura do comando",
    text: "A análise parte do enunciado e dos critérios exigidos para identificar se todos os pedidos foram enfrentados.",
  },
  {
    title: "Nível 2 · Conteúdo e fundamentação",
    text: "O sistema avalia domínio do tema, aderência ao espelho e profundidade dos argumentos apresentados.",
  },
  {
    title: "Nível 3 · Estrutura e clareza",
    text: "A resposta é observada em organização, coesão, objetividade, progressão lógica e qualidade da redação.",
  },
  {
    title: "Nível 4 · Síntese orientada",
    text: "O resultado volta em formato de feedback útil: potências, pontos de atenção, simulação de desempenho e próximos passos.",
  },
];

export default function MethodSection() {
  return (
    <section id="metodologia" className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-2xl md:p-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-100">
            Metodologia própria
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Não é um simples prompt para IA.
          </h2>
          <p className="mt-5 text-lg leading-8 text-indigo-50">
            A plataforma opera com uma arquitetura em 4 níveis de análise. O
            objetivo é gerar um feedback consistente, mais útil e mais próximo da
            prática séria de preparação.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {levels.map((level) => (
            <article
              key={level.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">{level.title}</h3>
              <p className="mt-3 leading-7 text-indigo-50">{level.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}