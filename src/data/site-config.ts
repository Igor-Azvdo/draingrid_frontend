export interface LinkItem {
  label: string;
  subtitle?: string;
  url: string;
  icon: "whatsapp" | "instagram" | "website";
  disabled?: boolean;
  disclaimer?: string;
  trackClick?: string;
}

export const siteConfig = {
  name: "Draingrid",
  description: "Ajudo você a viver melhor, aliviar a dor e dormir bem de forma natural e segura.",
  links: [
    {
      label: "Cannabis Medicinal",
      url: "https://wa.me/5511985827582",
      icon: "whatsapp" as const,
      trackClick: "link-cannabis-medicinal",
    },
    // {
    //   label: "Odontologia",
    //   subtitle: "João Pessoa",
    //   url: "https://wa.me/5583987819876",
    //   icon: "whatsapp" as const,
    // },
    {
      label: "Protocolo de tratamento",
      subtitle: "Bruxismo",
      url: "https://dentistacanabica.com.br/bruxismo",
      icon: "website" as const,
      trackClick: "link-protocolo-bruxismo",
    },
    {
      label: "Website",
      url: "/",
      icon: "website" as const,
      trackClick: "link-website",
    },
  ] satisfies LinkItem[],
};
