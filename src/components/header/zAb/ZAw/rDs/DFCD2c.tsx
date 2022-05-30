import { Popover } from "@headlessui/react";

import "../../../../../assets/styles/uASE2bcg/PTniEI.css";

const linksministers = {
  HOME: {
    title: "Início",
    link: {
      href: "/ministerios?track=footer",
      alt: "Veja todos nossos ministérios",
    },
  },
  EVANGELISTICO: {
    title: "Evangelístico",
    link: {
      href: "/ministerios/evangelismo?track=footer",
      alt: "Ministério evangelistico",
    },
  },
  APOIO: {
    title: "Apoio",
    link: {
      href: "/ministerios/apoio?track=footer",
      alt: "Ministério de Apoio",
    },
  },
  INFANTIL: {
    title: "Infantil",
    link: {
      href: "/ministerios/infantil?track=footer",
      alt: "Ministério infantil",
    },
  },
  COMUNICATION: {
    title: "Comunicação",
    link: {
      href: "/ministerios/comunicacao?track=footer",
      alt: "Ministério da comunicação",
    },
  },
  LOUVOR: {
    title: "Louvor",
    link: {
      href: "/ministerios/louvor?track=footer",
      alt: "Ministério do louvor",
    },
  },
  CULINARIA: {
    title: "Culinária",
    link: {
      href: "/ministerios/culinaria?track=footer",
      alt: "Ministério da culinária",
    },
  },
  ADMINIST: {
    title: "Administrativo",
    link: {
      href: "/ministerios/administrativo?track=footer",
      alt: "Ministério administrativo",
    },
  },
  INTREG: {
    title: "Integração",
    link: {
      href: "/ministerios/integracao?track=footer",
      alt: "Ministério de Integração",
    },
  },
  INTERS: {
    title: "Intercessão",
    link: {
      href: "/ministerios/intercessao?track=footer",
      alt: "Ministério da Intercessão",
    },
  },
  ENSINO: {
    title: "Ensino",
    link: {
      href: "/ministerios/ensino?track=footer",
      alt: "Ministério de ensino",
    },
  },
};
export function LzPx() {
  return (
    <Popover className="_pover">
      <Popover.Button className="_pover-button">Ministérios</Popover.Button>
      <Popover.Panel className="_pover-panel">
        <div className="_pover-arrow"></div>
        <nav className="_pover-nav">
          {Object.entries(linksministers).map(([key, value]) => {
            return (
              <a key={key} href={value.link.href} title={value.link.alt} target="_blank">
                {value.title}
              </a>
            );
          })}
        </nav>
      </Popover.Panel>
    </Popover>
  );
}
