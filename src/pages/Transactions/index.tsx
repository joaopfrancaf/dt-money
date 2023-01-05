import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
        id : number;
        description: string;
        type : 'income'| 'outcome';
        category : string;
        price : number;
        createAt : string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/transactions')
        .then(response => {
            setTransactions(response.data);
        })
    }, [])
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
            <SearchForm/>
            
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td width="50%">{transactions.description}</td>
                                    <td>
                                        <PriceHighLight variant={transactions.type}>
                                            {transactions.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{transactions.createAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
           
    )
}