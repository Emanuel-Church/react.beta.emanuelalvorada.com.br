import { Menu, Transition } from "@headlessui/react";
import { DotsThree, FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

import "/src/assets/styles/4pCnu7sB/navsocial.css"

export function NavSocial() {
    return (
        <div className="navsocial">
            <nav className="mobile">
                <Menu>
                    <>
                        <Menu.Button><DotsThree width="bold" className="dotsthree_icon"/></Menu.Button>
                        <Transition enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"/>
                        <>
                            <Menu.Items>
                                <Menu.Item>
                                    <a href="https://i.emanuelalvorada.com.br/" title="Facebook" rel="noopener" target="_blank"><FacebookLogo weight="bold"/>Facebook</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://i.emanuelalvorada.com.br/" title="Instagram" rel="noopener" target="_blank"><InstagramLogo weight="bold"/>Instagram</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://i.emanuelalvorada.com.br/" title="Youtube" rel="noopener" target="_blank"><YoutubeLogo weight="bold"/>Youtube</a>
                                </Menu.Item>
                            </Menu.Items>
                        </>
                    </>
                </Menu>
            </nav>
            <nav className="desktop">
                <a href="https://i.emanuelalvorada.com.br/" title="Facebook" rel="noopener" target="_blank"><FacebookLogo/></a>
                <a href="https://i.emanuelalvorada.com.br/" title="Instagram" rel="noopener" target="_blank"><InstagramLogo/></a>
                <a href="https://i.emanuelalvorada.com.br/" title="Youtube" rel="noopener" target="_blank"><YoutubeLogo/></a>
            </nav>
        </div>
    )
}