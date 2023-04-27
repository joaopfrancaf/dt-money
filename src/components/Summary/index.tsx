import { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from 'phosphor-react'
import { TransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
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

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{priceFormatter.format(x.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{priceFormatter.format(x.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color="#fff" />
                </header>

                <strong>{priceFormatter.format(x.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}