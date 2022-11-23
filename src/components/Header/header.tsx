import { HeaderContainer, HeaderContent, NewTransactionsButtom } from "./styles";
import logoImg from '../../assets/logo.svg'

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTransactionsButtom>Nova Transação</NewTransactionsButtom>
            </HeaderContent>
        </HeaderContainer>
    )
}