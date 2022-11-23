import { Header } from "../../components/Header/header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
            <SearchForm/>
            
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    $ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>hamburger</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    -$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>alimentacao</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
           
    )
}