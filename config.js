/**
 * Arquivo de Configuração - LetyADS
 * Edite aqui os dados principais do site
 * Depois atualize no HTML e CSS conforme necessário
 */

// ====== CONFIGURAÇÕES PRINCIPAIS ======
const config = {
    // Informações Pessoais
    nome: "Leticia",
    empresa: "LetyADS",
    profissao: "Especialista em Marketing & Tráfego Pago",
    
    // Contatos
    email: "contato@letyads.com",
    whatsapp: "5511999999999",
    instagram: "@letyads",
    linkedin: "letyads",
    tiktok: "@letyads",
    youtube: "@letyads",
    localizacao: "São Paulo, SP",
    
    // Estatísticas
    stats: {
        clinicas: 120,
        pacientes: "3.5M",
        roi: "5.2x",
        aumento_agendamentos: 73,
        faturamento_gerado: "2.8M",
        roas: "4.8x",
        retencao_clientes: 92,
        tempo_resposta: "24h"
    },
    
    // Serviços
    servicos: [
        {
            icone: "🎯",
            titulo: "Tráfego Pago Avançado",
            descricao: "Campanhas otimizadas no Google Ads, Meta e TikTok. Segmentação precisa, copywriting que converte e análise contínua de ROI."
        },
        {
            icone: "💻",
            titulo: "Estratégia Digital",
            descricao: "Planejamento completo de marketing digital. Análise de concorrência, posicionamento estratégico e calendário de conteúdo."
        },
        {
            icone: "📊",
            titulo: "Analytics & Dados",
            descricao: "Implementação de pixel de conversão, rastreamento avançado e relatórios mensais detalhados com insights acionáveis."
        },
        {
            icone: "✍️",
            titulo: "Copywriting & Criativo",
            descricao: "Textos persuasivos que vendem, design atrativo e vídeos que engajam. Cada elemento focado em conversão."
        },
        {
            icone: "🚀",
            titulo: "Growth Hacking",
            descricao: "Técnicas inovadoras para crescimento exponencial. Testes A/B, automação de marketing e experimentos contínuos."
        },
        {
            icone: "📱",
            titulo: "Social Media",
            descricao: "Gestão completa de redes sociais. Conteúdo estratégico, engajamento com comunidade e posicionamento de marca."
        }
    ],
    
    // Casos de Sucesso
    casos: [
        {
            icone: "💎",
            titulo: "Clínica Premium Estética",
            resultado: "1.500+ pacientes em 3 meses | ROI: 6.2x"
        },
        {
            icone: "🦷",
            titulo: "Odontologia Avançada",
            resultado: "847 agendamentos | 87% taxa conversão"
        },
        {
            icone: "✨",
            titulo: "Clinique de Beleza",
            resultado: "CPL reduzido 65% | 2.3M impressões"
        },
        {
            icone: "🏥",
            titulo: "Centro Estético Brasil",
            resultado: "3.2x ROAS | Escalada sustentável"
        },
        {
            icone: "👑",
            titulo: "Elite Dental Clinic",
            resultado: "500+ consultas agendadas | CPC: R$12"
        },
        {
            icone: "🎨",
            titulo: "Studio de Transformação",
            resultado: "10k+ leads | 42% conversão"
        }
    ],
    
    // Skills/Competências
    skills: [
        "Google Ads",
        "Facebook & Instagram Ads",
        "TikTok Ads",
        "Analytics",
        "SEO",
        "Copywriting",
        "Automação Marketing",
        "Design Gráfico"
    ],
    
    // Texto Sobre
    sobre: {
        p1: "Sou especialista em marketing digital e tráfego pago com mais de 5 anos de experiência transformando clínicas de estética e odontologia em referências no mercado.",
        p2: "Minha abordagem combina análise de dados refinada com criatividade e foco obsessivo em resultados. Cada campanha é planejada para gerar não apenas leads, mas pacientes de qualidade que viram casos de sucesso.",
        p3: "Trabalho com ferramentas de ponta como Google Ads, Meta Business Suite, TikTok Ads e plataformas de analytics avançadas para garantir que cada real investido gere máximo retorno."
    }
};

// ====== FUNÇÕES AUXILIARES ======

/**
 * Função para validar email
 * @param {string} email 
 * @returns {boolean}
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Função para enviar dados do formulário
 * (Conectar com seu backend aqui)
 * @param {object} dados 
 */
async function enviarFormulario(dados) {
    try {
        // Exemplo: enviar para seu backend
        // const response = await fetch('seu-backend.com/api/contato', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(dados)
        // });
        
        console.log('Dados a enviar:', dados);
        return true;
    } catch (error) {
        console.error('Erro ao enviar:', error);
        return false;
    }
}

/**
 * Função para formatar número
 * @param {number} numero 
 * @returns {string}
 */
function formatarNumero(numero) {
    if (numero >= 1000000) {
        return (numero / 1000000).toFixed(1) + 'M';
    }
    if (numero >= 1000) {
        return (numero / 1000).toFixed(1) + 'k';
    }
    return numero.toString();
}

/**
 * Função para rastrear evento
 * @param {string} categoria 
 * @param {string} acao 
 * @param {string} label 
 */
function rastrearEvento(categoria, acao, label) {
    console.log(`Evento: ${categoria} > ${acao} > ${label}`);
    
    // Se usar Google Analytics:
    // gtag('event', acao, {
    //     'event_category': categoria,
    //     'event_label': label
    // });
}

// ====== EXPORTAR CONFIGURAÇÃO ======
// Se usar módulos JavaScript (type="module" no HTML):
// export default config;