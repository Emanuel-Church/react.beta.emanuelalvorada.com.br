import { Disclosure, Transition } from "@headlessui/react";
import { At, CaretDown, MapPin, WhatsappLogo } from "phosphor-react";

import "/src/assets/styles/ElWmYqei/PcqIdcNKc.css";

export function UHiS() {
    return (
        <div className="_discl">
            <Disclosure>
                <Disclosure.Button className="_discl-btn">
                    <h5>Contato</h5>
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
                        <span>
                            <MapPin weight="bold" />
                            <a href="" title="Ver localização da Igreja Emanuel.">R. Santa Bárbara, 36</a>
                        </span>
                        <span>
                            <WhatsappLogo weight="bold" />
                            <a href="" title="Entrar em contato pelo WhatsApp do número (51) 99144-9000">(51) 99144-9000</a>
                        </span>
                        <span>
                            <At weight="bold" />
                            <a href="" title="Entrar em contato pelo E-mail: iemanuelalvorada@gmail.com">iemanuelalvorada@gmail.com</a>
                        </span>
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    )
}