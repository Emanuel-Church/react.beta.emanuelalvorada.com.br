import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

const linksministers = {
    HOME: {
        title: "Início",
        link: {
            href: "/ministerios?track=footer",
            alt: "Veja todos nossos ministérios"
        }
    },
    EVANGELISTICO: {
        title: "Evangelístico",
        link: {
            href: "/ministerios/evangelismo?track=footer",
            alt: "Ministério evangelistico"
        }
    },
    APOIO: {
        title: "Apoio",
        link: {
            href: "/ministerios/apoio?track=footer",
            alt: "Ministério de Apoio"
        }
    },
    INFANTIL: {
        title: "Infantil",
        link: {
            href: "/ministerios/infantil?track=footer",
            alt: "Ministério infantil"
        }
    },
    COMUNICATION: {
        title: "Comunicação",
        link: {
            href: "/ministerios/comunicacao?track=footer",
            alt: "Ministério da comunicação"
        }
    },
    LOUVOR: {
        title: "Louvor",
        link: {
            href: "/ministerios/louvor?track=footer",
            alt: "Ministério do louvor"
        }
    },
    CULINARIA: {
        title: "Culinária",
        link: {
            href: "/ministerios/culinaria?track=footer",
            alt: "Ministério da culinária"
        }
    },
    ADMINIST: {
        title: "Administrativo",
        link: {
            href: "/ministerios/administrativo?track=footer",
            alt: "Ministério administrativo"
        }
    },
    INTREG: {
        title: "Integração",
        link: {
            href: "/ministerios/integracao?track=footer",
            alt: "Ministério de Integração"
        }
    },
    INTERS: {
        title: "Intercessão",
        link: {
            href: "/ministerios/intercessao?track=footer",
            alt: "Ministério da Intercessão"
        }
    },
    ENSINO: {
        title: "Ensino",
        link: {
            href: "/ministerios/ensino?track=footer",
            alt: "Ministério de ensino"
        }
    }
};

export function T0Yo() {
  return (
    <div className="_discl">
      <Disclosure>
        <Disclosure.Button className="_discl-btn">
          <h5>Ministérios</h5>
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
            {Object.entries(linksministers).map(([key, value]) => {
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
