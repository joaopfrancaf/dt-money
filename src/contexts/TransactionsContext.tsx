import axios from "axios";
import { Children, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createAt: string;
}

interface dataType {
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
}

export interface TransactionContextType {
    transactions: Transaction[],
    callApi: (query?: string) => Promise<void>,
    createTransaction: (data: dataType) => Promise<void>
}

interface children {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: children) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function callApi(query?: string) {
        const response = await api.get('transactions', {
            params: {
                q: query
            }
        })
        const data = response.data

        setTransactions(data)
    }

    async function createTransaction(data: dataType) {
        const response = await api.post('transactions', { ...data, createAt: new Date() }) //aqui como o metodo http post ja devolve o que foi enviado pela api, é melhor usar para atualizar a lista do que chamar a api de novo
        setTransactions(prevState => [...prevState, response.data])
    }

    useEffect(() => {
        /*api.get('htransactions')
            .then(response => {
                setTransactions(response.data);
            })*/

        callApi()
    }, [])

    return (
        <TransactionContext.Provider value={{ transactions: transactions, callApi, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}