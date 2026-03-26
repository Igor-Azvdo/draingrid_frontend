export interface LinkItem {
  label: string;
  url: string;
  icon: "whatsapp" | "instagram" | "website";
  disabled?: boolean;
  disclaimer?: string;
}

export const siteConfig = {
  name: "Draingrid",
  description: "Ajudo você a viver melhor, aliviar a dor e dormir bem de forma natural e segura.",
  links: [
    {
      label: "Cannabis Medicinal",
      url: "https://wa.me/5500000000000",
      icon: "whatsapp" as const,
    },
    {
      label: "Odontologia - João Pessoa",
      url: "https://wa.me/5500000000000",
      icon: "whatsapp" as const,
    },
    {
      label: "Website",
      url: "#",
      icon: "website" as const,
      disabled: true,
      disclaimer: "Em breve",
    },
  ] satisfies LinkItem[],
};
