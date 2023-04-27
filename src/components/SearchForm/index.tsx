import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionContext, TransactionContextType } from "../../contexts/TransactionsContext";

const zodSchema = zod.object({
    transacoesbusca: zod.string(),
})

type inputType = zod.infer<typeof zodSchema>

export function SearchForm() {
    const { callApi } = useContext<TransactionContextType>(TransactionContext)
    const { register, handleSubmit } = useForm<inputType>({ resolver: zodResolver(zodSchema), })

    async function submit(data: inputType) {
        await callApi(data.transacoesbusca)
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Busque por transaçoes" {...register('transacoesbusca')}></input>

            <button type="submit">
                <MagnifyingGlass size={20} />
                buscar
            </button>
        </SearchFormContainer>
    )
}