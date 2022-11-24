import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButtom, Content, Overlay } from './styles'

export function NewTransactionModal () {
    return (
        <Dialog.Portal>
                        <Overlay></Overlay>

                        <Content>
                            <Dialog.Title>Nova trans</Dialog.Title>

                            <CloseButtom><X size={24}/></CloseButtom>

                            <form action="">
                                <input type="text" placeholder="descrição" required />
                                <input type="number" placeholder="preco" required />
                                <input type="text" placeholder="categoria" required />

                                <button type="submit"> cadastro</button>
                            </form>
                        </Content>
        </Dialog.Portal>
    )
}