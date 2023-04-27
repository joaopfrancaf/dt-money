import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";


export function Transactions() {
    const { transactions } = useContext(TransactionContext)

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions?.map(transactions => {
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