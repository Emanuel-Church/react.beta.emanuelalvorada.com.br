import { Menu, Transition } from "@headlessui/react";
import { DotsNine } from "phosphor-react";

import "/src/assets/styles/4pCnu7sB/navhost.css"

const linksMenuHost = {
    IME: {
        title: 'Igreja Emanuel',
        link: {
            href: 'https://emanuelalvorada.com.br/',
            alt: 'Igreja Emanuel'
        }
    },
    MINIST: {
        title: 'Ministérios',
        link: {
            href: 'https://emanuelalvorada.com.br/ministerios/',
            alt: 'Ministérios'
        }
    },
    EVENTS: {
        title: 'Eventos',
        link: {
            href: 'https://emanuelalvorada.com.br/eventos/',
            alt: 'Eventos'
        }
    },
    CCD: {
        title: 'CCD',
        link: {
            href: 'https://emanuelalvorada.com.br/ccd/',
            alt: 'Sistema CCD'
        }
    }
}

export function NavHost() {
    return (
        <div className="container">
            <nav className="nav_mobile">
                <Menu>
                    <>
                        <Menu.Button><DotsNine weight="bold" className="dotsnine_host"/></Menu.Button>
                        <Transition enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"/>
                        <>
                            <Menu.Items>
                                {Object.entries(linksMenuHost).map(([key, value]) => {
                                    return (
                                        <Menu.Item>
                                            <a key={key} href={value.link.href} title={value.link.alt} target="_blank">{value.title}</a>
                                        </Menu.Item>
                                    )
                                }) }
                            </Menu.Items>
                        </>
                    </>
                </Menu>
            </nav>
            <nav className="nav_desktop">
                {Object.entries(linksMenuHost).map(([key, value]) => {
                    return (
                        <a key={key} href={value.link.href} title={value.link.alt} target="_blank">{value.title}</a>
                    )
                }) }
            </nav>
        </div>
    )
}