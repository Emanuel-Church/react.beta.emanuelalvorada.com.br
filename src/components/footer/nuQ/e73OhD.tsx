import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

const linkspolitycs = {
    PRIVACY: {
        title: "Privacidade",
        link: {
            href: "/politicas/privacidade?track=footer",
            alt: "Política de privacidade"
        }
    },
    TERMS: {
        title: "Termo de uso",
        link: {
            href: "/politicas/termo?track=footer",
            alt: "Termo de Uso"
        }
    },
    COPYRIGHT: {
        title: "Direito Autorais",
        link: {
            href: "/politicas/copyright?track=footer",
            alt: "Direitos Autorais"
        }
    },
    COOKIES: {
        title: "Cokkies",
        link: {
            href: "/politicas/cookies?track=footer",
            alt: "Política de cookies"
        }
    },
};

export function BnOg() {
    return (
        <div className="_discl">
        <Disclosure>
          <Disclosure.Button className="_discl-btn">
            <h5>Políticas</h5>
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
              {Object.entries(linkspolitycs).map(([key, value]) => {
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