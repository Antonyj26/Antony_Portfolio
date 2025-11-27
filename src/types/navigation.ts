// src/types/navigation.ts

export interface NavItem {
  id: number;
  name: string;
  href: string; // Agora é um ID de seção (âncora)
  isMainSection?: boolean;
}

export const sidebarNavItems: NavItem[] = [
  { id: 1, name: "SOBRE", href: "#home", isMainSection: true }, // Mudei para #home (ID da seção)
  { id: 4, name: "Conhecimentos", href: "#conhecimentos" },
  { id: 2, name: "Experiências", href: "#experiencias" },
  { id: 3, name: "Projetos", href: "#portfolio" },
  { id: 5, name: "Formação", href: "#formacao" },
  { id: 6, name: "Interesses", href: "#interesses" },
  { id: 7, name: "Contato", href: "#contato" },
];
