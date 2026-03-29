# 🛠️ Guia Rápido de Manutenção - LetyADS

## Estrutura dos Arquivos

```
📁 LetyADS/
├── 📄 index.html      ← CONTEÚDO (Textos, estrutura HTML)
├── 🎨 styles.css      ← VISUAL (Cores, fontes, layouts)
├── ⚙️  script.js       ← FUNCIONALIDADE (Animações, interatividade)
├── ⚙️  config.js       ← DADOS (Configurações centralizadas)
├── 📖 README.md        ← DOCUMENTAÇÃO
└── 📋 MANUTENCAO.md   ← ESTE ARQUIVO
```

---

## 📝 EDIÇÕES MAIS COMUNS

### 1️⃣ TROCAR CORES DO SITE

**Arquivo:** `styles.css`

**Linha 11-17** - Encontre:
```css
:root {
    --primary: #6f46c1;      /* Roxo - cor principal */
    --secondary: #ec4899;    /* Rosa - cor secundária */
    --accent: #06b6d4;       /* Ciano - cor destaque */
    --dark: #0f172a;         /* Azul escuro - background */
    --light: #f8fafc;        /* Branco - fundo claro */
    --gray: #64748b;         /* Cinza - texto secundário */
}
```

**Como trocar:**
- Use um color picker online (ex: colorpicker.com)
- Copie o código hexa (ex: #FF5733)
- Cole no lugar da cor atual

**Exemplo:** Trocar roxo para azul
```css
--primary: #0066FF;  /* Era #6f46c1 */
```

---

### 2️⃣ ATUALIZAR TEXTOS & CONTATOS

**Arquivo:** `index.html`

**Procure por:**

**Header (linha ~120):**
```html
<div class="logo">LetyADS</div>
```
Troque "LetyADS" por seu nome/empresa

**Hero Section (linha ~180-185):**
```html
<h1>Marketing <span>Estratégico</span> para Clínicas de Sucesso</h1>
<p>Especialista em tráfego pago e marketing digital...</p>
```

**Estatísticas (linha ~196-210):**
```html
<div class="stat-number">120+</div>
<div class="stat-text">Clínicas Beneficiadas</div>
```

**Contato (linha ~520-540):**
```html
<a href="mailto:contato@letyads.com">contato@letyads.com</a>
<a href="https://wa.me/5511999999999">(11) 99999-9999</a>
```

**Footer (linha ~550+):**
```html
<a href="https://instagram.com/letyads" target="_blank">Instagram</a>
```

---

### 3️⃣ EDITAR SERVIÇOS

**Arquivo:** `index.html` (linha ~240-290)

**Estrutura de um card:**
```html
<div class="service-card fade-in-section">
    <div class="service-icon">🎯</div>
    <h3>Tráfego Pago Avançado</h3>
    <p>Campanhas otimizadas no Google Ads...</p>
</div>
```

**Para adicionar/editar:**
1. Copie um card inteiro
2. Cole após o último card
3. Mude o emoji (🎯 → 📧, etc)
4. Atualize o título e descrição

---

### 4️⃣ ADICIONAR/EDITAR CASOS DE SUCESSO

**Arquivo:** `index.html` (linha ~310-360)

**Estrutura:**
```html
<div class="portfolio-item fade-in-section">
    <div class="portfolio-image">💎</div>
    <div class="portfolio-overlay">
        <h3 class="portfolio-title">Clínica Premium Estética</h3>
        <p class="portfolio-meta">1.500+ pacientes em 3 meses | ROI: 6.2x</p>
    </div>
</div>
```

**Para atualizar:**
- Mude o emoji (💎, 🦷, ✨, etc)
- Atualize o nome da clínica
- Coloque os resultados reais

---

### 5️⃣ MUDAR TAMANHO DE FONTES/ESPAÇAMENTOS

**Arquivo:** `styles.css`

**Exemplos:**

Título da página (linha ~480):
```css
.section-title {
    font-size: 2.5rem;        /* Tamanho da fonte */
    margin-bottom: 1rem;      /* Espaço embaixo */
}
```

Texto do parágrafo (linha ~545):
```css
.about-text p {
    font-size: 1.05rem;       /* Tamanho */
    margin-bottom: 1.5rem;    /* Espaço embaixo */
    line-height: 1.8;         /* Espaço entre linhas */
}
```

---

### 6️⃣ ADICIONAR NOVA SEÇÃO

**Passo a passo:**

1. **No HTML (index.html)**, antes de `</div>` do footer:
```html
<section class="minha-secao" id="nova-secao">
    <div class="sua-estrutura">
        <h2>Meu Título</h2>
        <p>Meu conteúdo</p>
    </div>
</section>
```

2. **No CSS (styles.css)**, adicione no final:
```css
.minha-secao {
    padding: 6rem 5%;
    background: white;
    max-width: 1400px;
    margin: 0 auto;
}
```

3. **No HTML**, atualize nav links para incluir:
```html
<li><a href="#nova-secao">Nova Seção</a></li>
```

---

## 🎨 DICAS DE DESIGN

### Paleta de Cores Recomendada
- **Profissional:** Roxo/Azul + Rosa + Cinza
- **Moderno:** Roxo + Verde + Branco
- **Energético:** Rosa + Laranja + Roxo

### Tamanhos Recomendados
- **Título principal:** 2.5rem - 3.5rem
- **Subtítulo:** 1.25rem - 1.5rem
- **Texto corpo:** 1rem
- **Espaçamento:** 1rem, 1.5rem, 2rem, 3rem

---

## ⚙️ FUNCIONALIDADES QUE PODEM SER ADICIONADAS

### Fácil (5-10 min)
- [ ] Trocar cores
- [ ] Atualizar textos
- [ ] Mudar emojis dos cards
- [ ] Adicionar novo serviço/caso

### Médio (30-60 min)
- [ ] Integrar com email (Mailchimp, SendGrid)
- [ ] Adicionar Google Analytics
- [ ] Criar versão dark mode
- [ ] Adicionar menu mobile

### Avançado (2+ horas)
- [ ] Integrar com CRM
- [ ] Blog/artigos
- [ ] Sistema de agendamento
- [ ] Multi-idioma

---

## 🚀 CHECKLIST ANTES DE PUBLICAR

- [ ] Trocar email por seu email real
- [ ] Trocar WhatsApp por seu número
- [ ] Trocar links de redes sociais
- [ ] Atualizar nomes de clientes/casos
- [ ] Revisar todos os textos
- [ ] Testar em smartphone
- [ ] Testar em tablet
- [ ] Testar no navegador (Chrome, Firefox, Safari)
- [ ] Verificar links (CTA buttons)
- [ ] Testar formulário
- [ ] Verificar velocidade de carregamento

---

## 🔍 ONDE ENCONTRAR CADA COISA

| O que?                    | Arquivo   | Linha |
|---------------------------|-----------|-------|
| Logo/Nome                 | index.html| ~125  |
| Título principal          | index.html| ~180  |
| Estatísticas              | index.html| ~196  |
| Descrição serviços        | index.html| ~240+ |
| Casos de sucesso          | index.html| ~310+ |
| Sobre você                | index.html| ~440+ |
| Email/Contato             | index.html| ~520+ |
| Cores                     | styles.css| ~11-17|
| Animações                 | script.js | ~50+  |
| Dados centralizados       | config.js | ~5+   |

---

## 🐛 PROBLEMAS COMUNS & SOLUÇÕES

### "As cores não mudaram"
- Limpe cache do navegador (Ctrl+Shift+Del)
- Recarregue página (Ctrl+F5)
- Verifique se salvou o arquivo CSS

### "Formulário não envia email"
- Integração necessária com um serviço de email
- Use Mailchimp, SendGrid, ou seu próprio backend
- Veja `script.js` linha ~50 para mais info

### "Site deformado no mobile"
- Verifique se todos os 3 arquivos estão na mesma pasta
- Teste viewport: `<meta name="viewport"...>` no HTML
- Abra DevTools (F12) e ative modo mobile

### "Links não funcionam"
- Verifique `href` nos links (case-sensitive)
- Certifique-se que `id` existe nas seções
- Ex: `href="#contato"` → deve ter `id="contato"`

---

## 📞 QUANDO CHAMAR DESENVOLVEDOR

❌ **Não precisa:**
- Trocar cores
- Editar textos
- Atualizar números/estatísticas
- Mudar emojis
- Adicionar nova imagem

✅ **Precisa de ajuda:**
- Integrar com sistema de email
- Criar banco de dados
- Integrar com CRM
- Implementar agendamento
- Blog dinâmico
- Multi-idioma

---

## 💾 BACKUP IMPORTANTE

Antes de fazer grandes mudanças:
```
1. Copie os 3 arquivos para pasta de backup
2. Ou use Git/GitHub para versionamento
3. Só assim consegue voltar se errar
```

---

**Preciso de ajuda? Releia o README.md ou entre em contato!**