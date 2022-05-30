import { Popover } from "@headlessui/react";

import "../../../../../assets/styles/uASE2bcg/PTniEI.css"

const linksinstit = {
  ABOUT: {
    title: "Quem somos",
    link: {
      href: "/sobre?track=footer",
      alt: "Sobre a igreja Emanuel",
    },
  },
  VISAO: {
    title: "Nossa visão",
    link: {
      href: "/sobre#s-visao?track=footer",
      alt: "Nossa visão",
    },
  },
  INDENT: {
    title: "Nossa identidade",
    link: {
      href: "/sobre#s-identidade?track=footer",
      alt: "Nossa identidade",
    },
  },
  MISSAO: {
    title: "Nossa missão",
    link: {
      href: "/sobre#s-missao?track=footer",
      alt: "Nossa missão",
    },
  },
  VALORES: {
    title: "Nossos valores",
    link: {
      href: "/sobre#s-valores?track=footer",
      alt: "Nossos valores",
    },
  },
  FUNCTION: {
    title: "Descrição de funções",
    link: {
      href: "/sobre#s-funcoes?track=footer",
      alt: "Descrição de funções",
    },
  },
};

export function VHBa() {
  return (
    <Popover className="_pover">
      <Popover.Button className="_pover-button">Institucional</Popover.Button>
      <Popover.Panel className="_pover-panel _pover-panel_insttucional">
        <div className="_pover-arrow"></div>
        <nav className="_pover-nav">
          {Object.entries(linksinstit).map(([key, value]) => {
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
