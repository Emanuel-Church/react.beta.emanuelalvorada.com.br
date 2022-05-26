import "/src/assets/styles/SjAX7ckT/rNDqmg.css";

const linksMenuHost = {
  IME: {
    title: "Igreja Emanuel",
    link: {
      href: "https://emanuelalvorada.com.br/",
      alt: "Igreja Emanuel",
    },
  },
  MINIST: {
    title: "Ministérios",
    link: {
      href: "https://emanuelalvorada.com.br/ministerios/",
      alt: "Ministérios",
    },
  },
  EVENTS: {
    title: "Eventos",
    link: {
      href: "https://emanuelalvorada.com.br/eventos/",
      alt: "Eventos",
    },
  },
  CCD: {
    title: "CCD",
    link: {
      href: "https://emanuelalvorada.com.br/ccd/",
      alt: "Sistema CCD",
    },
  },
};

export function NavHostSUF() {
  return (
    <nav className="___suf-navhost">
      {Object.entries(linksMenuHost).map(([key, value]) => {
        return (
            <a key={key} href={value.link.href} title={value.link.alt} target="_blank">
              {value.title}
            </a>
        );
      })}
    </nav>
  );
}
