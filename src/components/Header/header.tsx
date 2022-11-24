import { HeaderContainer, HeaderContent, NewTransactionsButtom } from "./styles";
import logoImg from '../../assets/logo.svg'
import * as Dialog  from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal/index";

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>    
                        <NewTransactionsButtom>Nova Transação</NewTransactionsButtom>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>


            </HeaderContent>
        </HeaderContainer>
    )
}