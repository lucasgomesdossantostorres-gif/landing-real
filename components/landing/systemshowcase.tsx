import Image from "next/image";

const screens = [
  {
    title: "Interface de resposta",
    text: "O candidato escreve dentro da própria plataforma, com uma experiência pensada para treino constante.",
    image: "/images/Resposta1.png",
    alt: "Tela real do sistema para responder questões discursivas",
  },
  {
    title: "Feedback completo",
    text: "A resposta não volta só com uma nota. O sistema mostra pontos fortes, pontos de atenção e orientação prática.",
    image: "/images/Feedback3.png",
    alt: "Tela real do sistema mostrando o feedback completo de uma resposta",
  },
  {
    title: "Agente especialista",
    text: "Um chatbot treinado para discutir resultado, montar rotina, gerar questões e criar flashcards.",
    image: "/images/Mentor1.png",
    alt: "Tela real do agente especialista da plataforma",
  },
  {
    title: "Gráfico de evolução",
    text: "Visualize progresso, padrões recorrentes e critérios que mais merecem atenção.",
    image: "/images/Grafico1.png",
    alt: "Tela real do dashboard com gráfico de evolução do candidato",
  },
];

export default function SystemShowcase() {
  return (
    <section id="sistema" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Veja o sistema por dentro
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            O simples aprova. Pratique, corrija, melhore.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tenha a vantagem da escala, com eficiência e intencionalidade.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {screens.map((screen) => (
            <article
              key={screen.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
            >
              <div className="p-3">
                <Image
                  src={screen.image}
                  alt={screen.alt}
                  width={1400}
                  height={900}
                  className="rounded-2xl border border-slate-200"
                />
              </div>
              <div className="p-7 pt-4">
                <h3 className="text-2xl font-semibold text-slate-900">{screen.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{screen.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}