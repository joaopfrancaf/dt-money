import axios from "axios";
import { Children, ReactNode, createContext, useContext, useEffect, useState } from "react";

export interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createAt: string;
}

interface TransactionContextType {
    transactions: Transaction[]
}

interface children {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: children) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function callApi() {
        const response = await axios.get('http://localhost:3000/transactions')
        const data = response.data

        setTransactions(data)
    }
    useEffect(() => {
        /*axios.get('http://localhost:3000/transactions')
            .then(response => {
                setTransactions(response.data);
            })*/

        callApi()
    }, [])
    return (
        <TransactionContext.Provider value={{ transactions: transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}