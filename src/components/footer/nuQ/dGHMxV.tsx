import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

import "/src/assets/styles/ElWmYqei/PcqIdcNKc.css";

const linksMenuHost = {
  HOME: {
    title: "Início",
    link: {
        href: "/?track=footer",
        alt: "Ir ao início",
    },
  },
  CONTACT: {
    title: "Contato",
    link: {
        href: "/contato?track=footer",
        alt: "Entrar em contato"
    }
  },
  BASE: {
    title: "Base",
    link: {
        href: "/base?track=footer",
        alt: "Ver nossa localização",
    }
  },
  CONTRIBUA: {
    title: "Contribua",
    link: {
        href: "/apoiar?track=footer",
        alt: "Contribuir para o Reino de Deus"
    }
  }
};

export function KTmO() {
  return (
    <div className="_discl">
      <Disclosure>
        <Disclosure.Button className="_discl-btn">
          <h5>Explorar</h5>
          <CaretDown className="_discl-btn_icon" weight="bold" />
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
            {Object.entries(linksMenuHost).map(([key, value]) => {
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
  );
}
