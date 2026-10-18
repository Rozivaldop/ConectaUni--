// TRABALHO E ESTÁGIO (página informativa, sem vagas próprias)
// Para incluir um novo link, basta adicionar um objeto em um dos arrays abaixo.
// Carregado depois do script.js (usa navegarPara e o estilo das outras páginas).

const trabalhoPassosCTPS = [
    'Baixe o aplicativo "Carteira de Trabalho Digital" (Android ou iOS) ou acesse o serviço pelo portal gov.br.',
    'Entre com sua conta gov.br usando o CPF. Se ainda não tiver conta, dá para criar na hora.',
    'Pronto: a carteira é gratuita e fica ligada ao seu CPF. Ao ser contratado, você informa o CPF e confere os registros pelo app.'
];

const trabalhoEmprego = [
    {
        icone: 'fa-briefcase', titulo: 'Emprega Brasil (Sine)',
        desc: 'Portal do Governo Federal com as vagas do Sine. Entre com a conta gov.br para consultar e se candidatar. No celular, as vagas também aparecem no aplicativo Carteira de Trabalho Digital.',
        botao: 'Acessar Emprega Brasil', link: 'https://servicos.mte.gov.br/'
    },
    {
        icone: 'fa-brands fa-linkedin', titulo: 'LinkedIn Vagas',
        desc: 'Bom para vagas em empresas e para criar um perfil profissional. Filtre pela sua cidade e pelo tipo de contrato.',
        botao: 'Buscar no LinkedIn', link: 'https://www.linkedin.com/jobs/'
    }
];

const trabalhoEstagio = [
    {
        icone: 'fa-user-graduate', titulo: 'CIEE',
        desc: 'Centro de Integração Empresa-Escola. Cadastro gratuito para estudantes e vagas de estágio em várias cidades.',
        botao: 'Acessar CIEE', link: 'https://www.ciee.org.br'
    },
    {
        icone: 'fa-user-graduate', titulo: 'Nube',
        desc: 'Núcleo Brasileiro de Estágios. Reúne vagas de estágio e programas de trainee.',
        botao: 'Acessar Nube', link: 'https://www.nube.com.br'
    },
    {
        icone: 'fa-user-graduate', titulo: 'IEL',
        desc: 'Instituto Euvaldo Lodi, ligado à indústria. Oferece vagas de estágio para estudantes do ensino superior.',
        botao: 'Acessar IEL', link: 'https://www.iel.org.br'
    }
];

const trabalhoDireitosEstagio = [
    'O estágio precisa de um termo de compromisso assinado por você, pela empresa e pela sua instituição de ensino.',
    'A jornada deve ser compatível com as aulas. No ensino superior, o limite é de 6 horas por dia e 30 horas por semana.',
    'A empresa deve contratar seguro contra acidentes pessoais em seu nome.',
    'No estágio não obrigatório, a bolsa e o auxílio-transporte são obrigatórios. Há também direito a recesso remunerado.',
    'A regra geral de duração máxima é de 2 anos na mesma empresa.'
];

const trabalhoGolpes = [
    'Cobrança de taxa, "kit", uniforme ou curso para garantir a vaga.',
    'Contratação só por mensagem, sem entrevista, com promessa de salário alto e trabalho fácil.',
    'Pedido de senhas, código de verificação, dados de cartão ou fotos de documentos antes de qualquer contratação.',
    'Vaga divulgada só por perfil sem identificação da empresa (CNPJ, site, endereço).'
];

// Sine por estado do Nordeste. "link" é o botão principal; "extra" (opcional) é um segundo link menor.
const trabalhoSines = [
    { uf: 'AL', estado: 'Alagoas', capital: 'Maceió',
      desc: 'Sine Alagoas, ligado à Secretaria de Estado do Trabalho, Emprego e Qualificação. Atende em unidades pelo estado (como as Central Já!), com cadastro de currículo, consulta de vagas e orientação para a Carteira de Trabalho Digital.',
      botao: 'Portal Já! (agendamentos)', link: 'https://ja.al.gov.br' },
    { uf: 'BA', estado: 'Bahia', capital: 'Salvador',
      desc: 'SineBahia, da Secretaria do Trabalho, Emprego, Renda e Esporte (Setre). Em Salvador atende na Casa do Trabalhador (Pituaçu) e há unidades no interior. No site: vagas do dia e videoatendimento.',
      botao: 'Acessar SineBahia', link: 'https://ba.gov.br/trabalho/sinebahia' },
    { uf: 'CE', estado: 'Ceará', capital: 'Fortaleza',
      desc: 'Sine/IDT (Instituto de Desenvolvimento do Trabalho). Vagas e agendamento pelo portal e central de atendimento 0800 591 0363.',
      botao: 'Acessar Sine/IDT', link: 'https://www.idt.org.br' },
    { uf: 'MA', estado: 'Maranhão', capital: 'São Luís',
      desc: 'Sistema Nacional de Emprego (Sine) do Maranhão, na página da Secretaria do Trabalho, com informações do programa e de como ser atendido.',
      botao: 'Acessar Sine Maranhão', link: 'https://www.trabalho.ma.gov.br/programas-ou-campanhas/sistema-nacional-de-emprego-sine',
      extra: { texto: 'Portal do Governo do Maranhão', link: 'https://www.ma.gov.br/inicio' } },
    { uf: 'PB', estado: 'Paraíba', capital: 'João Pessoa',
      desc: 'Sine-PB, com consulta de vagas de emprego e informações sobre o atendimento no portal próprio.',
      botao: 'Consultar vagas (Sine-PB)', link: 'https://sine.pb.gov.br/informacoes/consulta-de-vagas',
      extra: { texto: 'Portal do Sine-PB', link: 'https://sine.pb.gov.br/' } },
    { uf: 'PE', estado: 'Pernambuco', capital: 'Recife',
      desc: 'Vagas de emprego divulgadas pela Sedepe, no portal do Governo de Pernambuco.',
      botao: 'Ver vagas de emprego', link: 'https://www.sedepe.pe.gov.br/vaga-de-emprego/',
      extra: { texto: 'Site da Sedepe', link: 'https://www.sedepe.pe.gov.br/' } },
    { uf: 'PI', estado: 'Piauí', capital: 'Teresina',
      desc: 'Sine Piauí, no portal do governo, com a página de vagas de emprego e informações do atendimento.',
      botao: 'Ver vagas (Sine-PI)', link: 'https://portal.pi.gov.br/sine/vagas-de-emprego/',
      extra: { texto: 'Portal do Sine-PI', link: 'https://portal.pi.gov.br/sine/' } },
    { uf: 'RN', estado: 'Rio Grande do Norte', capital: 'Natal',
      desc: 'Sine-RN, com atendimento presencial em Natal e em outras cidades do estado. As vagas do dia são divulgadas no Instagram oficial.',
      botao: 'Ver @sine.rn', link: 'https://www.instagram.com/sine.rn/' },
    { uf: 'SE', estado: 'Sergipe', capital: 'Aracaju',
      desc: 'Serviços do governo no portal GO Sergipe e, para cadastro e vagas do Sine, o portal de serviços do Ministério do Trabalho e Emprego.',
      botao: 'Acessar GO Sergipe', link: 'https://gosergipe.se.gov.br/',
      extra: { texto: 'Portal de serviços do MTE', link: 'https://servicos.mte.gov.br/spme-v2/#/login' } }
];

function filtrarSine(uf) {
    const lista = document.getElementById('sine-lista');
    if (!lista) return;
    const itens = trabalhoSines.filter(e => !uf || e.uf === uf);
    lista.innerHTML = itens.map(e => `
        <div style="background:white; border-radius:14px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04); display:flex; flex-direction:column; gap:10px; border-top:3px solid #2563eb;">
            <div style="display:flex; align-items:center; gap:12px;">
                <div style="width:44px; height:44px; border-radius:12px; background:#eff6ff; color:#2563eb; font-size:13px; font-weight:800; display:flex; align-items:center; justify-content:center;">${e.uf}</div>
                <div><strong style="font-size:14px; color:#1e293b;">${e.estado}</strong><div style="font-size:11px; color:#94a3b8;">Capital: ${e.capital}</div></div>
            </div>
            <p style="font-size:12px; color:#64748b; line-height:1.5; flex:1;">${e.desc}</p>
            <a href="${e.link}" target="_blank" rel="noopener noreferrer"
               style="display:flex; align-items:center; justify-content:center; gap:8px; background:#2563eb; color:white; padding:10px; border-radius:8px; font-size:12px; font-weight:600;"
               onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
                ${e.botao} <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            ${e.extra ? `<a href="${e.extra.link}" target="_blank" rel="noopener noreferrer" style="font-size:11px; color:#2563eb; text-align:center; font-weight:600;">${e.extra.texto} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:9px;"></i></a>` : ''}
        </div>`).join('');
}

function renderizarTrabalho(container) {
    const caixa = 'background:white; border-radius:14px; padding:18px; box-shadow:0 2px 8px rgba(0,0,0,0.04);';
    const botao = (link, texto) => `
        <a href="${link}" target="_blank" rel="noopener noreferrer"
           style="display:flex; align-items:center; justify-content:center; gap:8px; background:#2563eb; color:white; padding:10px; border-radius:8px; font-size:12px; font-weight:600; transition:0.2s;"
           onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
            ${texto} <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>`;
    const cards = lista => `<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:14px;">
        ${lista.map(c => `
            <div style="${caixa} display:flex; flex-direction:column; gap:10px; border-top:3px solid #2563eb;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <div style="width:44px; height:44px; border-radius:12px; background:#eff6ff; color:#2563eb; font-size:18px; display:flex; align-items:center; justify-content:center;"><i class="${c.icone.includes('fa-brands') ? c.icone : 'fa-solid ' + c.icone}"></i></div>
                    <strong style="font-size:14px; color:#1e293b;">${c.titulo}</strong>
                </div>
                <p style="font-size:12px; color:#64748b; line-height:1.5; flex:1;">${c.desc}</p>
                ${botao(c.link, c.botao)}
            </div>`).join('')}
    </div>`;
    const titulo = (icone, texto) => `<h3 style="font-size:14px; color:#1e3a8a; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px;"><i class="fa-solid ${icone}" style="color:#2563eb;"></i> ${texto}</h3>`;
    const lista = itens => `<ul style="padding-left:18px; font-size:13px; line-height:1.7; color:#475569;">${itens.map(i => `<li>${i}</li>`).join('')}</ul>`;

    container.innerHTML = `
        <section style="background:linear-gradient(135deg,#1e3a8a,#3b82f6); color:white; border-radius:16px; padding:28px; position:relative; overflow:hidden;">
            <i class="fa-solid fa-briefcase" style="position:absolute; right:24px; top:50%; transform:translateY(-50%) rotate(-8deg); font-size:90px; opacity:0.15;"></i>
            <h2 style="font-size:24px; margin-bottom:6px;"><i class="fa-solid fa-briefcase"></i> Trabalho e Estágio</h2>
            <p style="font-size:13px; color:#dbeafe; max-width:540px; line-height:1.6;">
                Está em uma cidade nova e quer trabalhar ou estagiar? Veja como tirar a Carteira de Trabalho, onde procurar vagas e quais são os seus direitos como estagiário.
            </p>
        </section>

        <section>
            ${titulo('fa-id-card-clip', 'Carteira de Trabalho')}
            <div style="${caixa} display:flex; flex-direction:column; gap:12px;">
                <ol style="padding-left:18px; font-size:13px; line-height:1.7; color:#475569;">${trabalhoPassosCTPS.map(p => `<li>${p}</li>`).join('')}</ol>
                <div style="max-width:320px;">${botao('https://www.gov.br/pt-br/temas/carteira-de-trabalho-digital', 'Abrir Carteira de Trabalho Digital')}</div>
            </div>
        </section>

        <section>
            ${titulo('fa-magnifying-glass', 'Onde procurar emprego')}
            ${cards(trabalhoEmprego)}
        </section>

        <section>
            ${titulo('fa-location-dot', 'Sine do seu estado (Nordeste)')}
            <div style="${caixa} margin-bottom:14px; display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <label for="sine-estado" style="font-size:12px; font-weight:600; color:#475569;">Escolha o estado:</label>
                <select id="sine-estado" onchange="filtrarSine(this.value)"
                        style="padding:9px 12px; border:1px solid #cbd5e1; border-radius:8px; font-size:13px; min-width:220px; background:white;">
                    <option value="">Todos os estados do Nordeste</option>
                    ${trabalhoSines.map(e => `<option value="${e.uf}">${e.estado}</option>`).join('')}
                </select>
            </div>
            <div id="sine-lista" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:14px;"></div>
        </section>

        <section>
            ${titulo('fa-user-graduate', 'Onde procurar estágio')}
            ${cards(trabalhoEstagio)}
            <div style="${caixa} margin-top:14px;">
                <h4 style="font-size:13px; color:#1e293b; margin-bottom:8px;"><i class="fa-solid fa-scale-balanced"></i> Seus direitos no estágio (Lei do Estágio, nº 11.788/2008)</h4>
                ${lista(trabalhoDireitosEstagio)}
                <div style="max-width:320px; margin-top:12px;">${botao('https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm', 'Ler a Lei do Estágio')}</div>
            </div>
        </section>

        <section style="background:#fef2f2; border:1px solid #fecaca; border-radius:16px; padding:18px;">
            <h4 style="font-size:13px; color:#991b1b; margin-bottom:8px;"><i class="fa-solid fa-triangle-exclamation"></i> Cuidado com golpes de vaga</h4>
            ${lista(trabalhoGolpes)}
            <p style="font-size:12px; color:#7f1d1d; margin-top:8px;">Na dúvida, não pague nada e confirme a vaga no site ou no telefone oficial da empresa.</p>
        </section>

        <section style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:16px; padding:18px; display:flex; gap:12px; align-items:flex-start;">
            <i class="fa-solid fa-circle-info" style="color:#2563eb; font-size:20px; margin-top:2px;"></i>
            <p style="font-size:12px; color:#1e3a8a; line-height:1.6;">
                Esta página reúne links e orientações gerais. O ConectaUni não oferece vagas nem intermedia contratações. Regras, vagas e prazos mudam,
                então confira sempre as informações nos sites oficiais antes de se cadastrar.
            </p>
        </section>
    `;
    filtrarSine('');
}
