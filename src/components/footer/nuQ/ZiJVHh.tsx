import { Disclosure, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

import "/src/assets/styles/ElWmYqei/PcqIdcNKc.css";

const linkssocial = {
    FACEBOOK: {
        title: "Facebook",
        link: {
            href: "http://i.emanuelalvorada.com.br/xabrBE",
            alt: "Facebook da igreja Emanuel"
        }
    },
    INSTAGRAM: {
        title: "Instagram",
        link: {
            href: "http://i.emanuelalvorada.com.br/a2GnyZ",
            alt: "Instagram da igreja Emanuel"
        }
    },
    YOUTUBE: {
        title: "Youtube",
        link: {
            href: "http://i.emanuelalvorada.com.br/yyhLn7",
            alt: "Youtube da igreja Emanuel"
        }
    },
    WHATSAPP: {
        title: "WhatsApp",
        link: {
            href: "http://i.emanuelalvorada.com.br/Jpo936",
            alt: "WhatsApp da igreja Emanuel"
        }
    },
};

export function YuH1() {
    return (
        <div className="_discl">
        <Disclosure>
          <Disclosure.Button className="_discl-btn">
            <h5>Mídias</h5>
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
              {Object.entries(linkssocial).map(([key, value]) => {
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