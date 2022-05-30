import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function AlertCookies() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog className="_dialog" onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="_dialog-panel">
          <Dialog.Title className="_dialog-title">Quer um cookie?</Dialog.Title>
          <span>Ao clicar em "Aceitar todos os cookies", você concorda que a <strong>Igreja Emanuel</strong> pode guardar cookies no seu dispositivo e utilizar essas informações de acordo com a nossa <a href="/politicas/cookies?track=CookiesAlert" title="Política de Cookies" target="_blank" rel="noopener noreferrer">Política de Cookies</a>.</span>
          <button onClick={() => setIsOpen(false)}>Aceitar!</button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
