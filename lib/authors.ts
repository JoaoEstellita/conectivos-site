export interface Author {
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  thiago: {
    name: "Thiago Mello",
    role: "CEO · CCO",
    photo: "/team/thiago.png",
    bio: "Co-fundador da Conectivos. Lidera visão de produto e relacionamento com clientes.",
  },
  luiz: {
    name: "Luiz Guedes",
    role: "CMO · CCO",
    photo: "/team/luiz.png",
    bio: "Co-fundador da Conectivos. Estratégia de marketing, growth e expansão comercial.",
  },
  joao: {
    name: "João Estellita",
    role: "CTO",
    photo: "/team/joao.png",
    bio: "Co-fundador da Conectivos. Engenharia de IA, arquitetura de sistemas e automações.",
  },
};
