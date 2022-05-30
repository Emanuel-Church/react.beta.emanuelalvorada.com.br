import { Menu } from "@headlessui/react";
import { List, X } from "phosphor-react";

import { VHBa } from "./rDs/cr6YD7Kg";
import { LzPx } from "./rDs/DFCD2c";
import { IIhG } from "./59LLtI";

export function FxFw() {
  return (
    <div className="_menu-dkml _menu-mb">
        <Menu>
            <Menu.Button className="_btn">
                <List weight="bold" />
            </Menu.Button>
            <Menu.Items as="ul" className="_nav">
                <nav>
                    <Menu.Item as="header" className="_header">
                        <Menu.Button className="_btn">
                            <X weight="bold" />
                        </Menu.Button>
                    </Menu.Item>
                    <Menu.Item as="li">
                        <a href="/?track=Header" title="Home">Home</a>
                    </Menu.Item>
                    <Menu.Item as="li">
                        <VHBa />
                    </Menu.Item>
                    <Menu.Item as="li">
                        <LzPx />
                    </Menu.Item>
                    <Menu.Item as="li">
                        <a href="/?track=Header" title="Contribua">Contribua</a>
                    </Menu.Item>
                    <Menu.Item as="li">
                        <IIhG />
                    </Menu.Item>
                </nav>
            </Menu.Items>
        </Menu>
    </div>
  );
}