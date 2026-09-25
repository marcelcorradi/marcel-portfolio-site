# Auditoria de SEO, 2026-09-25

Feita com a skill `portfolio-seo`. Cada achado traz a evidência que o sustenta. As buscas
foram feitas numa ferramenta só dos EUA que **não é o Google**: indicam direção, não
posição. O lado do Google só o Search Console mostra.

**Alvo**: quem está contratando product designer ou especialista em design system. Três
famílias de busca: cargo/serviço, cliente + tema, nome das ferramentas.

## Resumo

- O site é rápido e tecnicamente limpo depois que o JavaScript roda. **O problema é o que
  sai antes disso.** As 10 rotas entregam o mesmo HTML da home, com canonical apontando
  pra `/`. Pra quem não roda JS (crawlers de IA, LinkedIn, WhatsApp, Slack), todo case é
  uma cópia vazia da home.
- Os `<title>` são narrativos ("Seven brands, one system") e não têm as palavras que
  alguém busca ("Whirlpool", "design system"). Onde dá pra ganhar é **cliente + tema**:
  páginas de case de outros designers aparecem nessas buscas quando o título nomeia o
  cliente e o tema.
- As buscas de contratação ("hire design system designer") só mostram marketplaces. O
  site sozinho não entra ali. Quem entra é um perfil no Contra ou no Upwork que traga o
  visitante pra cá.

## Crítico

### C1. Toda rota entrega o HTML da home, com canonical = home
- **Evidência**: `cmp dist/index.html dist/cases/onfly-design-system.html` → idênticos.
  Ao vivo: `curl -A GPTBot https://marcelcorradi.com/cases/onfly-design-system` retorna
  `<title>Marcel Corradi — Product Designer · Design Systems</title>` e
  `canonical href="https://marcelcorradi.com/"`. O `<body>` é só `<div id="root">`.
  O Lighthouse dá SEO 100 porque avalia o DOM renderizado, então não pega isso.
- **Por que é crítico**: o Google orienta explicitamente a não usar JS pra trocar o
  canonical do HTML original. Crawlers de IA e unfurlers veem uma página vazia com o
  título da home, e um link de case colado no LinkedIn mostra o card da home.
- **Correção**: (1) `build-route-shells.mjs` grava título, descrição, canonical, `og:*`
  e `twitter:*` de cada rota no shell, a partir do frontmatter. Sem dependência nova.
  (2) Opcional: pôr o texto do case, em HTML, dentro de `#root` (o `createRoot` substitui
  no mount). Com isso os crawlers de IA leem o artigo.
- **Dona**: `portfolio-seo` · **Esforço**: (1) P, (2) M

## Alto

### A1. Os títulos não têm as palavras que alguém busca
- **Evidência**: títulos renderizados atuais, `<frontmatter title> — Marcel Corradi`
  (`CasePage.tsx:48`). Nenhum dos 8 cita cliente + "design system" ou o tipo de ferramenta.
  Na busca "multi-brand design system case study", páginas de case pessoais ranqueiam com
  títulos como "Wise Multi-Brand Design System — Case Study | Ness Grixti".
- **Correção**: um campo `seoTitle` no frontmatter, usado no `<title>`. O H1 narrativo
  continua como está. As propostas por página estão em
  `.claude/skills/portfolio-seo/references/query-map.md` e esperam sua aprovação.
- **Dona**: `portfolio-content` escreve, `portfolio-seo` liga o campo · **Esforço**: P

### A2. Todo `<title>` usa travessão
- **Evidência**: "—" em `index.html`, no `DEFAULT_TITLE` de `use-page-meta.ts`, em
  `CasePage.tsx`, `Tools.tsx`, `NotFound.tsx` e `DesignAuditPrivacy.tsx`. Viola a sua
  regra de não usar travessão ligando frases em nada que é publicado.
- **Correção**: separador `·`. Sai junto com A1.
- **Dona**: `portfolio-content` · **Esforço**: P

### A3. Nenhum dado estruturado
- **Evidência**: zero ocorrências de `ld+json` ou `schema.org` em `index.html`, `src/` e
  `public/`.
- **Correção**: `Person` + `WebSite` no `index.html` (com `sameAs` pros perfis), `Article`
  por case com o cliente em `about` e `SoftwareApplication` pras ferramentas. Os blocos
  estão em `references/structured-data.md`. É isso que separa o "Onfly" do case das
  outras quatro Onflys que aparecem na busca.
- **Dona**: `portfolio-seo` · **Esforço**: P (site-wide) / M (por rota, junto com C1)

### A4. O link compartilhado não tem imagem
- **Evidência**: o `index.html` não declara `og:image`. `portfolio-kit` e `radar-do-scoop`
  não têm `cover`, e o fallback em `use-page-meta.ts` é `/favicon.svg`, que a maioria dos
  unfurlers ignora. O `twitter:card` estático é `summary`.
- **Correção**: um card padrão 1200×630 em PNG, com URL absoluta, mais capa (ou imagem de
  compartilhamento) nos dois cases.
- **Dona**: `portfolio-design` · **Esforço**: M

### A5. Links de volta sobrando no GitHub
- **Evidência**: API do GitHub: `users/marcelcorradi` com `blog: ""`;
  `marcel-portfolio-site` e `portfolio-kit` com `homepage: null`.
- **Correção**: pôr `https://marcelcorradi.com` no campo Website do perfil e no
  "Website" dos dois repos. Leva dois minutos e é você quem faz.
- **Dona**: Marcel · **Esforço**: P

### A6. Buscas de contratação só mostram marketplaces
- **Evidência**: "hire design system designer freelance" → Contra, Arc, Toptal, YunoJuno,
  Webflow, Freelancermap. "freelance product designer prototypes figma MVP hire" →
  Toptal, Upwork, Arc, Fiverr. Nenhum site pessoal.
- **Correção**: estar onde essas buscas caem. O Contra tem uma página
  `contra.com/hire/design-systems-designers`. Perfil com link pro site, e o site converte.
- **Dona**: você + skill `upwork-proposals` · **Esforço**: M

## Médio

- **M1. Duas listas de rotas escritas à mão.** `pages = ["tools"]` em
  `build-route-shells.mjs` e `/tools` no `urls` de `build-sitemap.mjs`. Página nova
  esquecida numa delas falha em silêncio. Correção: uma lista compartilhada, que o C1
  também usa. `portfolio-seo`, P.
- **M2. Imagens maiores que o espaço.** Lighthouse no case do Whirlpool (mobile):
  `uses-responsive-images`, 438 KiB de economia. `srcset`/`sizes` nas figuras dos cases.
  `portfolio-design`, M.
- **M3. JS num chunk só.** ~706 KB (~224 KB gzip), com aviso do Vite a cada build.
  Lighthouse: 93 a 111 KiB de JS não usado. `React.lazy` nas rotas de case e tools.
  A performance ainda é boa (92 no case, 95 na home), por isso é médio.
  `portfolio-design`, P a M.
- **M4. Nenhuma página sustenta "protótipos".** "Prototype" não aparece em nenhum case,
  só na linha de "What I do" da home. Se existe trabalho de protótipo publicável, é um
  case que falta. Decisão sua.
- **M5. O site não diz que você está disponível pra contratação.** Não existe seção de
  serviços ou "Work with me" que responda a quem busca "design system consultant". É
  decisão de posicionamento antes de ser de SEO. Decisão sua.
- **M6. As descrições abrem com a frase narrativa.** Os `summary` foram escritos pro card
  da home. Reescrever como snippet depois que os títulos forem aprovados.
  `portfolio-content`, P.
- **M7. LCP da home sem prioridade.** Lighthouse: `prioritize-lcp-image`. Colocar
  `fetchpriority="high"` na foto do hero. `portfolio-design`, P.
- **M8. Comentário errado em `build-sitemap.mjs`.** Diz que `/cases` é "disallowed in
  robots.txt". O `robots.txt` permite de propósito, pro `noindex` ser lido. Corrigir o
  comentário. P.
- **M9. Sem `llms.txt`** (404). Só pesa nos buscadores de IA fora do Google, e o C1 pesa
  mais. Baixa prioridade.

## Checado e OK

| Item | Evidência |
|---|---|
| Rotas reais respondem 200 | `/`, `/tools`, `/cases/whirlpool-design-system`, `/design-audit/privacy` → 200 |
| URL inexistente dá 404 de verdade | `/nope` → 404 |
| `robots.txt` libera tudo, bots de IA inclusive, e aponta o sitemap | lido ao vivo |
| Sitemap = páginas indexáveis | 10 URLs = home + tools + 8 cases. Stub e privacidade de fora |
| `noindex` onde deve | `/cases` (stub), NotFound, `404.html` |
| Core Web Vitals (Lighthouse mobile) | Home: LCP 2,3 s, TBT 120 ms, CLS 0. Case do Whirlpool: LCP 2,4 s, TBT 200 ms, CLS 0 |
| Foto de perfil | 33 KB em webp (o item "488 KB" do project-decisions estava velho e saiu) |
| `/cases` e URLs com barra no fim | `/cases` → 301 → `/cases/` → 404. Inofensivo, nada linka pra lá |

## Não verificado (precisa de você)

1. **O Google indexou o site?** Uma busca `site:marcelcorradi.com` (não Google) não trouxe
   nenhuma página do domínio. Até 2026-09-24 as URLs de case davam 404. O Search Console
   → Páginas responde isso. Se tiver dados em Desempenho, um export de Consultas e
   Páginas (3 meses) mostra o que já ranqueia.
2. **LinkedIn e Medium** têm o site no campo de website?
3. **As páginas na Chrome Web Store e na Figma Community** linkam pra marcelcorradi.com?

## Ordem sugerida

1. **A5** (dois minutos, você faz).
2. **C1 (1) + A2 + A3 site-wide + M1**, num commit só: são mudanças de build e
   `index.html`, sem texto novo além do separador.
3. **A1 + M6**: você aprova os títulos do `query-map.md`, depois a `portfolio-content`
   escreve títulos e descrições finais.
4. **A4** e **A6** em paralelo.
5. **M4 / M5**: decisões de posicionamento, quando fizer sentido.
