import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

const linksccds = {
    CCD: {
        title: "Início",
        link: {
            href: "/edu/ccd/?track=footer",
            alt: "Centro de Crecimento em Deus"
        }
    },
    EFM: {
        title: "EFM",
        link: {
            href: "/edu/ccd/efm/?track=footer",
            alt: "Escola de Formação Ministerial"
        }
    }
};

export function DfGx() {
    return (
        <div className="_discl">
        <Disclosure>
          <Disclosure.Button className="_discl-btn">
            <h5>CCD</h5>
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
              {Object.entries(linksccds).map(([key, value]) => {
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