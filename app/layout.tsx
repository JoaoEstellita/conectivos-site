import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conectivos — IA que conversa. Resultados que aparecem.",
  description:
    "Agência de IA conversacional B2B. Agentes no WhatsApp, inteligência de mercado, automação de processos, SDR outbound e analytics para empresas brasileiras.",
  keywords: [
    "agência de IA",
    "inteligência artificial WhatsApp",
    "automação B2B",
    "agentes IA",
    "chatbot empresarial",
    "SDR automação",
    "analytics IA",
    "Conectivos",
    "automação WhatsApp",
    "IA para empresas",
  ],
  authors: [{ name: "Conectivos" }],
  creator: "Conectivos",
  metadataBase: new URL("https://conectivos.net"),
  alternates: {
    canonical: "https://conectivos.net",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://conectivos.net",
    siteName: "Conectivos",
    title: "Conectivos — IA que conversa. Resultados que aparecem.",
    description:
      "Agência de IA conversacional B2B. Agentes no WhatsApp, inteligência de mercado, automação de processos e mais.",
    // og-image gerada automaticamente por app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Conectivos — IA que conversa. Resultados que aparecem.",
    description: "Agência de IA conversacional B2B para empresas brasileiras.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://conectivos.net/#organization",
      name: "Conectivos",
      url: "https://conectivos.net",
      logo: {
        "@type": "ImageObject",
        url: "https://conectivos.net/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-22-99733-9108",
        contactType: "sales",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://conectivos.net/#website",
      url: "https://conectivos.net",
      name: "Conectivos",
      publisher: { "@id": "https://conectivos.net/#organization" },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": "https://conectivos.net/#webpage",
      url: "https://conectivos.net",
      name: "Conectivos — IA que conversa. Resultados que aparecem.",
      isPartOf: { "@id": "https://conectivos.net/#website" },
      about: { "@id": "https://conectivos.net/#organization" },
      description:
        "Agência de IA conversacional B2B. Agentes no WhatsApp, inteligência de mercado, automação de processos, SDR outbound e analytics para empresas brasileiras.",
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": "https://conectivos.net/#service-atendimento",
      name: "Agentes de IA no WhatsApp",
      provider: { "@id": "https://conectivos.net/#organization" },
      description:
        "Agentes de inteligência artificial que atendem, qualificam e fecham negócios no WhatsApp 24/7, sem custo fixo de equipe.",
      areaServed: "BR",
      serviceType: "Automação de Atendimento",
    },
    {
      "@type": "Service",
      "@id": "https://conectivos.net/#service-sdr",
      name: "SDR Outbound IA",
      provider: { "@id": "https://conectivos.net/#organization" },
      description:
        "Prospecção outbound automatizada com agentes de IA que identificam, abordam e qualificam leads em escala.",
      areaServed: "BR",
      serviceType: "Automação de Vendas",
    },
    {
      "@type": "Service",
      "@id": "https://conectivos.net/#service-intelligence",
      name: "Inteligência de Mercado IA",
      provider: { "@id": "https://conectivos.net/#organization" },
      description:
        "Análise competitiva, pesquisa de mercado e relatórios automáticos gerados por agentes de inteligência artificial.",
      areaServed: "BR",
      serviceType: "Inteligência Competitiva",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full antialiased"
        style={{ background: "#070711", color: "#ffffff" }}
      >
        {children}

        {/* Chat Widget — Conectivos Agents */}
        <Script id="chat-widget" strategy="afterInteractive">{`
(function(){
  var T='74eeecb6-eac2-4142-a7d9-53f5a9430624',A='https://conectivos-agents.fly.dev',C='#6366f1',G='Olá! Como posso ajudar?',N='Atendimento Conectivos';
  var S=Math.random().toString(36).slice(2,12);
  var s=document.createElement('style');
  s.textContent='#_cw_btn{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:'+C+';border:none;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.35);z-index:2147483640;font-size:24px;display:flex;align-items:center;justify-content:center;color:#fff;}#_cw_box{display:none;position:fixed;bottom:92px;right:24px;width:360px;height:480px;background:#0f172a;border:1px solid #1e293b;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:2147483640;flex-direction:column;overflow:hidden;font-family:-apple-system,sans-serif;}#_cw_box.open{display:flex;}#_cw_hd{background:'+C+';padding:14px 16px;display:flex;justify-content:space-between;align-items:center;}#_cw_hd span{color:#fff;font-weight:700;font-size:15px;}#_cw_hd button{background:none;border:none;color:rgba(255,255,255,.8);cursor:pointer;font-size:20px;padding:0;line-height:1;}#_cw_msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}._cwm{max-width:80%;padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.55;word-break:break-word;}._cwb{background:'+C+';color:#fff;align-self:flex-start;border-radius:4px 12px 12px 12px;}._cwu{background:#1e293b;color:#e2e8f0;align-self:flex-end;border-radius:12px 4px 12px 12px;}#_cw_inp{display:flex;gap:8px;padding:12px;border-top:1px solid #1e293b;}#_cw_inp input{flex:1;background:#1e293b;border:1px solid #334155;border-radius:8px;padding:9px 12px;color:#e2e8f0;font-size:14px;outline:none;}#_cw_inp input:focus{border-color:'+C+';}#_cw_inp button{background:'+C+';border:none;border-radius:8px;width:40px;color:#fff;cursor:pointer;font-size:18px;}@media(max-width:480px){#_cw_box{width:calc(100vw - 32px)!important;height:calc(100vh - 120px)!important;right:16px!important;bottom:88px!important;}}';
  document.head.appendChild(s);
  var btn=document.createElement('button');btn.id='_cw_btn';btn.innerHTML='&#128172;';document.body.appendChild(btn);
  var box=document.createElement('div');box.id='_cw_box';
  box.innerHTML='<div id="_cw_hd"><span>'+N+'</span><button id="_cw_cls">&#x2715;</button></div><div id="_cw_msgs"></div><div id="_cw_inp"><input id="_cw_in" placeholder="Digite uma mensagem..." type="text"/><button id="_cw_snd">&#10148;</button></div>';
  document.body.appendChild(box);
  var msgs=document.getElementById('_cw_msgs');var input=document.getElementById('_cw_in');
  var greeted=false;
  function addMsg(t,r){var m=document.createElement('div');m.className='_cwm '+(r==='b'?'_cwb':'_cwu');m.textContent=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;return m;}
  btn.onclick=function(){box.classList.toggle('open');if(!greeted&&box.classList.contains('open')){greeted=true;setTimeout(function(){addMsg(G,'b');},300);}};
  document.getElementById('_cw_cls').onclick=function(){box.classList.remove('open');};
  function send(){var v=input.value.trim();if(!v)return;input.value='';addMsg(v,'u');var dot=addMsg('...','b');
    fetch(A+'/widget/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({widget_token:T,message:v,session_id:S})}).then(function(r){return r.json();}).then(function(d){msgs.removeChild(dot);addMsg(d.reply||'Não entendi, pode repetir?','b');}).catch(function(){msgs.removeChild(dot);addMsg('Não foi possível conectar. Tente novamente.','b');});}
  document.getElementById('_cw_snd').onclick=send;
  input.addEventListener('keydown',function(e){if(e.key==='Enter')send();});
})();
        `}</Script>

        {/* Google Analytics 4 — ativo quando NEXT_PUBLIC_GA_ID estiver configurado */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
