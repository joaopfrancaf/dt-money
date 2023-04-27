import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButtom, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

const formZodSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income', 'outcome'])
})

type inputtype = zod.infer<typeof formZodSchema>

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionContext)
    const { handleSubmit, register, control, reset } = useForm<inputtype>({
        resolver: zodResolver(formZodSchema)
    })

    async function submit(data: inputtype) {
        createTransaction(data)

        reset()
    }
    return (
        <Dialog.Portal>
            <Overlay></Overlay>

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButtom><X size={24} /></CloseButtom>

                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder="descrição" {...register('description')} required />
                    <input type="number" placeholder="price" {...register('price', { valueAsNumber: true })} required />
                    <input type="text" placeholder="categoria" {...register('category')} required />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit"> Cadastro</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}