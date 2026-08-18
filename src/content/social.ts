export const social = [
  { url: "mailto:weare@mongedev.com", name: "mail" },
  { url: "https://github.com/fernnje", name: "github" },
  { url: "https://www.linkedin.com/in/monge-dev/", name: "linkedin" },
  { url: "https://x.com/fernnje", name: "x" },
  { url: "https://www.instagram.com/fernnj_/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
