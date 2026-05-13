import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/photos/profile.jpg";
import coding from "@/assets/photos/coding.jpg";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  FileText,
  Download,
  Cpu,
  Terminal,
  Network as NetworkIcon,
  GitBranch,
  Code2,
  Layers,
  Boxes,
  Workflow,
  Binary,
  Hash,
  ScrollText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arilson Albano — Software Engineering Student · 42 Luanda" },
      {
        name: "description",
        content:
          "Portfolio de Arilson Albano. Estudante de Engenharia de Software na 42 Luanda, com foco em desenvolvimento web e base sólida em C e sistemas.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------- shared bits ---------- */

function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
      <span className="text-accent">{n}</span>
      <span className="h-px w-8 bg-foreground/30" />
      <span>{label}</span>
    </div>
  );
}

function SectionHead({
  n,
  kicker,
  title,
  intro,
}: {
  n: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <Eyebrow n={n} label={kicker} />
      </div>
      <div className="md:col-span-8">
        <h2 className="font-display text-balance text-4xl font-light leading-[1.04] tracking-tight md:text-6xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- nav ---------- */

const NAV = [
  ["00", "Index", "#top"],
  ["01", "Sobre", "#sobre"],
  ["02", "Origem", "#origem"],
  ["03", "42 Luanda", "#cursus"],
  ["04", "Projetos", "#projetos"],
  ["05", "Stack", "#stack"],
  ["06", "Atualmente", "#now"],
  ["07", "Documentos", "#docs"],
  ["08", "Contacto", "#contacto"],
] as const;

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-multiply">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="font-display text-base tracking-tight md:text-lg">
          A<span className="text-accent">·</span>Albano
        </a>
        <nav className="hidden font-mono text-[11px] uppercase tracking-[0.22em] md:flex md:gap-6">
          {NAV.slice(1, 6).map(([n, label, href]) => (
            <a key={n} href={href} className="group inline-flex items-center gap-1.5 text-foreground/70 hover:text-foreground">
              <span className="text-accent">{n}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="group hidden items-center gap-2 rounded-full border border-foreground/25 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] hover:border-foreground md:inline-flex"
        >
          Contactar
          <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative grain pt-28 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/15 pb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para colaborar — 2026
          </span>
          <span>Portfolio · Vol. 01</span>
          <span className="hidden md:inline">Luanda · GMT+1</span>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-12 md:pt-16">
          {/* left: type */}
          <div className="md:col-span-7">
            <p className="reveal font-mono text-xs uppercase tracking-[0.28em] text-foreground/60">
              Software Engineering Student · 42 Luanda
            </p>
            <h1
              className="reveal mt-6 font-display text-[14vw] font-light leading-[0.92] tracking-[-0.02em] md:text-[8.4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Arilson
              <br />
              <span className="italic text-accent">Albano</span>
              <span className="text-foreground">.</span>
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-pretty text-lg leading-relaxed text-foreground/75 md:text-xl"
              style={{ animationDelay: "200ms" }}
            >
              Desenvolvedor em formação na 42 Luanda, focado em construir experiências web simples e úteis.
              Tenho base em C e sistemas, e sigo aprendendo frontend no dia a dia.
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-background transition hover:bg-accent"
              >
                Vamos conversar
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.2em] hover:border-foreground"
              >
                <Download size={14} /> Currículo
              </a>
            </div>

            <dl className="reveal mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-foreground/15 pt-8 sm:grid-cols-4" style={{ animationDelay: "420ms" }}>
              {[
                ["Localização", "Luanda, AO"],
                ["Foco", "Web · Frontend · React"],
                ["Cohort", "42 Luanda · 2024→"],
                ["Idiomas", "PT · EN"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">{k}</dt>
                  <dd className="mt-1.5 text-sm text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* right: portrait */}
          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="reveal relative w-full max-w-[280px] md:max-w-[320px]" style={{ animationDelay: "160ms" }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-foreground/5">
                <img
                  src={profile}
                  alt="Arilson Albano"
                  className="h-full w-full object-cover [filter:contrast(1.02)_saturate(.95)]"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-20 overflow-hidden border-y border-foreground/15 bg-foreground/[0.03] py-5">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl italic md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "Web Development",
              "·",
              "Frontend",
              "·",
              "React / TypeScript",
              "·",
              "UI / UX",
              "·",
              "APIs",
              "·",
              "42 Luanda",
              "·",
              "Product-minded",
              "·",
            ].map((t, j) => (
              <span key={`${i}-${j}`} className={t === "·" ? "text-accent" : "text-foreground/80"}>
                {t}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- about ---------- */

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        n="01"
        kicker="Sobre / About"
        title={
          <>
            Gosto de construir software simples, útil e <em className="text-accent">bem cuidado</em>.
          </>
        }
      />

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-2">
          <div className="space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
            <p>
              Comecei no ensino médio técnico em <strong className="font-medium text-foreground">Informática de Gestão</strong> e
              aprendi a pensar software como solução para pessoas e negócios.
            </p>
            <p>
              Hoje sou cadete da <strong className="font-medium text-foreground">42 Luanda</strong>, onde a metodologia
              peer-to-peer me ajuda a evoluir rápido: ler specs, testar, e revisar código com colegas.
            </p>
            <p>
              Tenho base em <strong className="font-medium text-foreground">C e sistemas</strong>, mas meu foco hoje é
              desenvolvimento web: interfaces, acessibilidade e performance.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {[
              ["JavaScript / TypeScript", "Base no frontend"],
              ["React / Vite", "Stack de UI"],
              ["C / C++", "Base técnica"],
              ["UX / UI", "Experiência do usuário"],
            ].map(([a, b]) => (
              <li key={a} className="flex items-baseline gap-3 border-b border-foreground/15 pb-3">
                <span className="font-mono text-xs text-accent">→</span>
                <div>
                  <div className="font-display text-lg">{a}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55">{b}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- origem / ensino médio + projetos ---------- */

const HS_PROJECTS = [
  {
    no: "P.01",
    title: "Website para Transportadora",
    tags: ["Web", "HTML/CSS", "UX"],
    body:
      "Site institucional para uma empresa de transportes: estrutura de páginas, hierarquia de informação e identidade visual. O primeiro projeto onde tive de pensar no usuário antes do código.",
    Icon: Code2,
  },
  {
    no: "P.02",
    title: "Sistema de Gestão de Stock",
    tags: ["C#", ".NET", "Lógica de negócio"],
    body:
      "Aplicação desktop em C# para gerir produtos, entradas e saídas de armazém. Trabalhei modelagem de dados, validações e o fluxo completo de uma operação empresarial.",
    Icon: Boxes,
  },
  {
    no: "P.03",
    title: "Emissão de Declarações & Certificados",
    tags: ["Automação", "Sistemas", "Documental"],
    body:
      "Sistema administrativo para automatizar a emissão de declarações e certificados acadêmicos — eliminando processos manuais e reduzindo erros institucionais.",
    Icon: ScrollText,
  },
  {
    no: "P.04",
    title: "Rede Wired / Wireless",
    tags: ["Networking", "Infra", "Hands-on"],
    body:
      "Projeto prático de rede: cabeamento estruturado, configuração de switches, distribuição de IPs e cobertura wireless. Aprendi olhando para os pacotes, não só para o diagrama.",
    Icon: NetworkIcon,
  },
];

function Origem() {
  return (
    <section id="origem" className="border-y border-foreground/15 bg-foreground/[0.025]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHead
          n="02"
          kicker="Origem · Ensino Médio Técnico"
          title={
            <>
              Informática de Gestão — base técnica e <em className="text-accent">primeiros projetos</em>.
            </>
          }
          intro="Quatro anos de formação técnica em programação, redes e bases de dados, com projetos reais e foco prático."
        />

        {/* timeline */}
        <ol className="relative mt-20 grid gap-10 md:grid-cols-4">
          <span className="absolute left-0 right-0 top-3 hidden h-px bg-foreground/20 md:block" />
          {[
            ["Ano 1", "Fundamentos", "Primeiros contatos com programação, lógica e ofimática avançada."],
            ["Ano 2", "Bancos & Redes", "SQL, modelagem de dados, redes wired/wireless e administração básica."],
            ["Ano 3", "Desenvolvimento", "C#, web e os primeiros sistemas funcionais para problemas reais."],
            ["Ano 4", "Projetos Finais", "Sistemas integrados — gestão, automação documental, infraestrutura."],
          ].map(([y, t, b]) => (
            <li key={y} className="relative pl-0">
              <span className="absolute -top-0.5 left-0 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full border border-foreground/25 bg-background font-mono text-[10px] text-accent md:left-1/2 md:-translate-x-1/2">
                ◆
              </span>
              <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">{y}</div>
              <h4 className="mt-2 font-display text-2xl">{t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{b}</p>
            </li>
          ))}
        </ol>

        {/* projects */}
        <div className="mt-28">
          <div className="flex items-end justify-between border-b border-foreground/20 pb-4">
            <Eyebrow n="02 / b" label="Projetos do Ensino Médio" />
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/50 md:block">
              {HS_PROJECTS.length} entradas
            </span>
          </div>
          <div className="divide-y divide-foreground/15">
            {HS_PROJECTS.map(({ no, title, tags, body, Icon }) => (
              <article
                key={no}
                className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{no}</div>
                  <Icon size={28} className="mt-4 text-foreground/70 transition group-hover:text-accent" strokeWidth={1.4} />
                </div>
                <div className="md:col-span-7">
                  <h4 className="font-display text-2xl leading-tight md:text-3xl">{title}</h4>
                  <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-foreground/75">{body}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <ul className="flex flex-wrap gap-1.5 md:justify-end">
                    {tags.map((t) => (
                      <li key={t} className="rounded-full border border-foreground/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/65">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 42 cursus ---------- */

function Cursus42() {
  return (
    <section id="cursus" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        n="03"
        kicker="42 Luanda · Cadet"
        title={"42 Luanda"}
      />

      {/* photo + intro */}
      <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-foreground/5">
            <img src={coding} alt="Sessão de trabalho" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:pt-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            42 Luanda, ritmo intenso e prático
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Sem aulas tradicionais — apenas pares, projetos e código.
          </h3>
          <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
            Na 42, cada projeto é um problema real com requisitos e prazo. Aprendo fazendo, testando e revisando com colegas.
          </p>
        </div>
      </div>

      {/* values */}
      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {[
          ["Disciplina", "Deadlines reais. Código que tem de passar a Norminette, a Moulinette e os colegas."],
          ["Autonomia", "Sem material teórico fornecido. Cada conceito começa numa man page ou num paper."],
          ["Comunidade", "Avaliações peer-to-peer ensinam a ler código alheio tão bem quanto a escrever o próprio."],
        ].map(([t, b]) => (
          <div key={t} className="border-t border-foreground/25 pt-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">— Pilar</div>
            <h4 className="mt-3 font-display text-3xl">{t}</h4>
            <p className="mt-3 text-pretty text-base leading-relaxed text-foreground/70">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 42 projects ---------- */

const PROJECTS_42 = [
  {
    no: "01",
    name: "Libft",
    track: "C · Memory",
    body: "Recriação das funções essenciais da libc — memória, strings, listas. A base sobre a qual todos os outros projetos são construídos.",
    learned: ["Ponteiros", "Memory mgmt", "API design"],
    Icon: Layers,
  },
  {
    no: "02",
    name: "ft_printf",
    track: "C · Parsing",
    body: "Implementação de printf com variadic functions, parsing de format strings e formatação de tipos numéricos e textuais.",
    learned: ["Variadic args", "Parsing", "Buffers"],
    Icon: Hash,
  },
  {
    no: "03",
    name: "get_next_line",
    track: "C · I/O",
    body: "Leitura de arquivos linha a linha com static buffers — exercício de estado, leaks e edge cases em I/O.",
    learned: ["File I/O", "Static state", "Edge cases"],
    Icon: ScrollText,
  },
  {
    no: "04",
    name: "Born2beroot",
    track: "Sysadmin · Linux",
    body: "Configuração de uma VM Debian segura: SSH, UFW, sudo, fail2ban, cron, partições LVM. Linux do ponto de vista do administrador.",
    learned: ["Linux", "Hardening", "Virtualização"],
    Icon: Terminal,
  },
  {
    no: "05",
    name: "push_swap",
    track: "Algorithms",
    body: "Ordenação de uma pilha em C com um conjunto restrito de operações, optimizando o número de movimentos.",
    learned: ["Algoritmos", "Complexidade", "Otimização"],
    Icon: GitBranch,
  },
  {
    no: "06",
    name: "minitalk",
    track: "IPC · Signals",
    body: "Cliente/servidor que comunicam apenas através de sinais UNIX — SIGUSR1 e SIGUSR2 carregando bits.",
    learned: ["IPC", "Signals", "Bitwise"],
    Icon: Binary,
  },
  {
    no: "07",
    name: "so_long",
    track: "2D · MiniLibX",
    body: "Pequeno jogo 2D em C com renderização tile-based, gestão de eventos e parsing de mapas.",
    learned: ["MLX", "Game loop", "Sprites"],
    Icon: Boxes,
  },
  {
    no: "08",
    name: "philosophers",
    track: "Concurrency",
    body: "O problema clássico dos filósofos jantando — threads, mutexes e a arte de evitar deadlocks e starvation.",
    learned: ["Threads", "Mutex", "Sync"],
    Icon: Workflow,
  },
  {
    no: "09",
    name: "minishell",
    track: "Systems · Parsing",
    body: "Um shell inspirado no bash: lexer, parser, expansão de variáveis, pipes, redirections, builtins, gestão de processos.",
    learned: ["Parsing", "fork/exec", "Pipes"],
    Icon: Terminal,
  },
  {
    no: "10",
    name: "NetPractice",
    track: "Networking",
    body: "Resolução de cenários de rede — IP addressing, sub-redes, routing — depurando configurações até a topologia funcionar.",
    learned: ["TCP/IP", "Subnets", "Routing"],
    Icon: NetworkIcon,
  },
  {
    no: "11",
    name: "Cub3D",
    track: "Graphics · Raycasting",
    body: "Engine 3D inspirado em Wolfenstein, em C, usando raycasting com a MiniLibX. Matemática vetorial, parsing de mapas, texturização.",
    learned: ["Raycasting", "Linear algebra", "Rendering"],
    Icon: Cpu,
    inProgress: true,
  },
];

function Projects42() {
  return (
    <section id="projetos" className="border-y border-foreground/15 bg-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-28 text-background md:px-10 md:py-40">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
              <span className="text-accent">04</span>
              <span className="h-px w-8 bg-background/30" />
              <span>Projetos · 42 cursus</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-balance text-4xl font-light leading-[1.04] tracking-tight md:text-6xl">
              Onze projetos, uma <em className="text-accent">trajetória</em>.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-background/70 md:text-lg">
              "Cada projeto da 42 é um passo prático para ganhar consistência e autonomia."
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-background/15 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_42.map(({ no, name, track, body, learned, Icon, inProgress }) => (
            <article
              key={no}
              className="group relative flex flex-col bg-foreground p-7 transition hover:bg-[oklch(0.22_0.02_250)]"
            >
              <header className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-background/45">{no}</span>
                  <Icon size={20} strokeWidth={1.4} className="text-background/70 group-hover:text-accent" />
                </div>
                {inProgress && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> WIP
                  </span>
                )}
              </header>
              <h3 className="mt-6 font-display text-3xl text-background">
                {name}
              </h3>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{track}</div>
              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-background/70">{body}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {learned.map((l) => (
                  <li key={l} className="rounded-full border border-background/25 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-background/65">
                    {l}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- stack ---------- */

const TECH = ["TypeScript", "JavaScript", "React", "Vite", "HTML", "CSS", "Tailwind", "Git", "Linux"];
const KNOW = [
  "Frontend moderno",
  "Componentes reutilizáveis",
  "Acessibilidade",
  "Design systems",
  "APIs REST",
  "Integração com backend",
  "Performance web",
  "Testes básicos",
  "Git workflow",
  "Comunicação com produto",
];

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        n="05"
        kicker="Stack & Conhecimentos"
        title={
          <>
            Ferramentas e <em className="text-accent">bases</em> do meu dia a dia.
          </>
        }
      />

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">— Tecnologias</div>
          <ul className="mt-6 space-y-4">
            {TECH.map((t, i) => (
              <li key={t} className="flex items-baseline justify-between border-b border-foreground/15 pb-3">
                <span className="font-display text-2xl tracking-tight md:text-3xl">{t}</span>
                <span className="font-mono text-[11px] tracking-[0.22em] text-foreground/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">— Conhecimentos</div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {KNOW.map((k) => (
              <li
                key={k}
                className="rounded-full border border-foreground/25 px-4 py-2 font-display text-base text-foreground/85 transition hover:border-accent hover:text-accent"
              >
                {k}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-foreground/15 pt-8">
            {[
              ["~11", "Projetos 42"],
              ["4", "Anos técnico"],
              ["2026", "Foco em web"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl tracking-tight text-foreground md:text-6xl">{n}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- now ---------- */

function Now() {
  return (
    <section id="now" className="border-y border-foreground/15 bg-foreground/[0.025]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <SectionHead
          n="06"
          kicker="Currently / Atualmente"
          title={
            <>
              No que estou a trabalhar <em className="text-accent">agora</em>.
            </>
          }
        />

        <div className="mt-16 grid gap-px bg-foreground/15 md:grid-cols-2">
          {[
            {
              t: "Portfolio & UI",
              k: "Em evolução",
              b: "Refinando layout, tipografia e acessibilidade para uma experiência limpa e rápida.",
            },
            {
              t: "Frontend moderno",
              k: "Foco principal",
              b: "React, TypeScript e Vite, com componentes reutilizáveis e boas práticas de UI.",
            },
            {
              t: "Integração web",
              k: "Em paralelo",
              b: "Consumo de APIs, estados e formulários, conectando o frontend ao backend.",
            },
            {
              t: "Fundamentos",
              k: "Base sólida",
              b: "C e sistemas ajudam na performance e no raciocínio, mas não são meu foco principal hoje.",
            },
          ].map(({ t, k, b }) => (
            <div key={t} className="bg-background p-8 md:p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{k}</div>
              <h4 className="mt-3 font-display text-3xl md:text-4xl">{t}</h4>
              <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-foreground/70">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- docs ---------- */

const DOCS = [
  {
    title: "Currículo / CV",
    sub: "Documento profissional — PDF",
    href: "https://www.linkedin.com/in/arilson-albano-9647b7329",
    cta: "Solicitar CV",
    external: true,
  },
  {
    title: "Diploma do Ensino Médio",
    sub: "Informática de Gestão",
    href: "/docs/diploma-ensino-medio.pdf",
    cta: "Abrir PDF",
  },
  {
    title: "Resultados academicos 42 Luanda",
    sub: "Resultados acadêmicos",
    href: "/docs/certificado-42-luanda.pdf",
    cta: "Abrir PDF",
  },
];

function Docs() {
  return (
    <section id="docs" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        n="07"
        kicker="Documentos · Arquivo"
        title={
          <>
            Comprovativos, em <em className="text-accent">papel</em> e em PDF.
          </>
        }
      />

      <ul className="mt-16 divide-y divide-foreground/20 border-y border-foreground/20">
        {DOCS.map((d) => (
          <li key={d.title}>
            <a
              href={d.href}
              target={d.external ? "_blank" : undefined}
              rel={d.external ? "noreferrer" : undefined}
              className="group grid items-center gap-4 py-7 md:grid-cols-12"
            >
              <div className="md:col-span-1">
                <FileText size={22} strokeWidth={1.4} className="text-foreground/60 group-hover:text-accent" />
              </div>
              <div className="md:col-span-7">
                <div className="font-display text-2xl md:text-3xl">{d.title}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                  {d.sub}
                </div>
              </div>
              <div className="md:col-span-4 md:text-right">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-accent">
                  {d.cta}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- contact / footer ---------- */

function Contact() {
  return (
    <section id="contacto" className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
          <span className="text-accent">08</span>
          <span className="h-px w-8 bg-background/30" />
          <span>Contacto · Let's talk</span>
        </div>
        <h2 className="mt-8 max-w-5xl font-display text-balance text-5xl font-light leading-[0.98] tracking-tight md:text-[7rem]">
          Tem um projeto, uma vaga,
          <br />
          ou apenas quer <em className="italic text-accent">conversar</em>?
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="mailto:arilsonalbano625@gmail.com"
              className="group inline-flex max-w-full items-center gap-3 break-all font-display text-2xl text-background hover:text-accent md:text-4xl"
            >
              arilsonalbano625@gmail.com
              <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="md:col-span-6">
            <ul className="space-y-5">
              <li className="flex items-center justify-between border-b border-background/20 pb-4">
                <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
                  <Phone size={14} /> Telefone
                </span>
                <a href="tel:+244937827435" className="font-display text-xl hover:text-accent">+244 937 827 435</a>
              </li>
              <li className="flex items-center justify-between border-b border-background/20 pb-4">
                <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
                  <Linkedin size={14} /> LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/arilson-albano-9647b7329"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-xl hover:text-accent"
                >
                  /in/arilson-albano
                </a>
              </li>
              <li className="flex items-center justify-between border-b border-background/20 pb-4">
                <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
                  <MapPin size={14} /> Local
                </span>
                <span className="font-display text-xl">Luanda · Angola</span>
              </li>
              <li className="flex items-center justify-between border-b border-background/20 pb-4">
                <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
                  <Mail size={14} /> Resposta
                </span>
                <span className="font-display text-xl">{"<"} 24h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-background/20 pt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-background/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Arilson Albano · Luanda, AO</span>
          <span>Built by hand — Vol. 01</span>
          <a href="#top" className="hover:text-accent">↑ Voltar ao topo</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

function Portfolio() {
  return (
    <main className="bg-background text-foreground">
      <TopNav />
      <Hero />
      <About />
      <Origem />
      <Cursus42 />
      <Projects42 />
      <Stack />
      <Now />
      <Docs />
      <Contact />
    </main>
  );
}
