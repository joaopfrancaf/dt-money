import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export function useSummary () {
    const { transactions } = useContext(TransactionContext)
    const x = transactions.reduce((acc, Transaction) => {
        if (Transaction.type === 'income') {
            acc.income += Transaction.price
        } else {
            acc.outcome += Transaction.price
        }

        acc.total = acc.income - acc.outcome

        return acc
    }, { income: 0, outcome: 0, total: 0 })

    return x
}