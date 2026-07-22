const signupUrl = "https://app.seudominio.com.br/cadastro";
const essentialUrl = "https://app.seudominio.com.br/checkout/essencial";
const proUrl = "https://app.seudominio.com.br/checkout/pro";

type Plan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  badge?: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  buttonNote: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Gratuito",
    description:
      "Conheça a plataforma e experimente a correção de respostas discursivas sem compromisso.",
    price: "R$ 0",
    period: "/mês",
    features: [
      "3 correções discursivas por mês",
      "2 mensagens por dia no Mentor IA",
    ],
    buttonText: "Começar gratuitamente",
    buttonUrl: signupUrl,
    buttonNote: "Não exige cartão de crédito.",
  },
  {
    name: "Essencial",
    badge: "Mais escolhido",
    description:
      "Para quem está estudando com frequência e precisa de acompanhamento contínuo da evolução.",
    price: "R$ 124,73",
    period: "/mês",
    features: [
      "50 correções discursivas por mês",
      "30 mensagens por dia no Mentor IA",
      "Feedback detalhado de conteúdo",
      "Estimativa educacional de pontuação",
      "Acompanhamento de desempenho",
      "Identificação de pontos fortes e dificuldades",
      "Acesso ampliado ao Mentor IA",
    ],
    buttonText: "Assinar o Essencial",
    buttonUrl: essentialUrl,
    buttonNote: "Cobrança recorrente. Cancele quando desejar.",
    highlighted: true,
  },
  {
    name: "Pro",
    description:
      "Para candidatos com rotina intensiva de estudos e maior volume de treinamento discursivo.",
    price: "R$ 172,46",
    period: "/mês",
    features: [
      "70 correções discursivas por mês",
      "60 mensagens por dia no Mentor IA",
      "Feedback detalhado de conteúdo",
      "Estimativa educacional de pontuação",
      "Acompanhamento de desempenho",
      "Acesso ampliado ao Mentor IA",
      "Respostas mais extensas no Mentor IA",
    ],
    buttonText: "Assinar o Pro",
    buttonUrl: proUrl,
    buttonNote: "Cobrança recorrente. Cancele quando desejar.",
  },
];

function CheckIcon({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        highlighted
          ? "bg-indigo-100 text-indigo-700"
          : "bg-emerald-50 text-emerald-600"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
      >
        <path
          d="M5 10.5 8.2 13.5 15 6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PricingSection() {
  return (
    <section id="planos" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Planos
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Escolha o ritmo ideal para sua preparação.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Comece gratuitamente ou aumente seu volume de prática conforme sua
            rotina de estudos.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Correções disponíveis atualmente para questões discursivas Cebraspe
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-[28px] border p-7 transition duration-300 hover:-translate-y-1 md:p-8 ${
                plan.highlighted
                  ? "border-indigo-500 bg-white shadow-[0_24px_70px_rgba(79,70,229,0.18)]"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex whitespace-nowrap rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-21 text-sm leading-7 text-slate-600">
                  {plan.description}
                </p>
              </div>

              <div className="mt-7 border-y border-slate-200 py-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-950">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="pb-1 text-sm font-medium text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-7 flex-1">
                <p className="text-sm font-semibold text-slate-950">
                  O plano inclui:
                </p>

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckIcon highlighted={plan.highlighted} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={plan.buttonUrl}
                  className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white shadow-lg hover:bg-indigo-700"
                      : "border border-slate-300 bg-white text-slate-900 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  {plan.buttonText}
                </a>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  {plan.buttonNote}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-100/70 px-6 py-5 text-center">
          <p className="text-sm leading-6 text-slate-600">
            O principal resultado da plataforma é o feedback educacional
            detalhado. A pontuação apresentada é uma simulação de desempenho e
            pode divergir da avaliação oficial da banca.
          </p>
        </div>
      </div>
    </section>
  );
}