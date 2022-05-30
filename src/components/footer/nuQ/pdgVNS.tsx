import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

const linksinstit = {
    ABOUT: {
        title: "Quem somos",
        link: {
            href: "/sobre?track=footer",
            alt: "Sobre a igreja Emanuel"
        }
    },
    VISAO: {
        title: "Nossa visão",
        link: {
            href: "/sobre#s-visao?track=footer",
            alt: "Nossa visão"
        }
    },
    INDENT: {
        title: "Nossa identidade",
        link: {
            href: "/sobre#s-identidade?track=footer",
            alt: "Nossa identidade"
        }
    },
    MISSAO: {
        title: "Nossa missão",
        link: {
            href: "/sobre#s-missao?track=footer",
            alt: "Nossa missão"
        }
    },
    VALORES: {
        title: "Nossos valores",
        link: {
            href: "/sobre#s-valores?track=footer",
            alt: "Nossos valores"
        }
    },
    FUNCTION: {
        title: "Descrição de funções",
        link: {
            href: "/sobre#s-funcoes?track=footer",
            alt: "Descrição de funções"
        }
    }
};

export function LkE5() {
    return (
        <div className="_discl">
        <Disclosure>
          <Disclosure.Button className="_discl-btn">
            <h5>Institucional</h5>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="nav" className="_discl-panel">
              {Object.entries(linksinstit).map(([key, value]) => {
                return (
                  <span>
                    <a key={key} href={value.link.href} title={value.link.alt} target="_blank">
                      {value.title}
                    </a>
                  </span>
                );
              })}
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
    )
}