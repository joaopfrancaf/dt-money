import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButtom, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import * as RadioGroup from "@radix-ui/react-radio-group";

export function NewTransactionModal () {
    return (
        <Dialog.Portal>
                        <Overlay></Overlay>

                        <Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <CloseButtom><X size={24}/></CloseButtom>

                            <form action="">
                                <input type="text" placeholder="descrição" required />
                                <input type="number" placeholder="preco" required />
                                <input type="text" placeholder="categoria" required />

                                <TransactionType>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24}/>
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>

                                <button type="submit"> Cadastro</button>
                            </form>
                        </Content>
        </Dialog.Portal>
    )
}