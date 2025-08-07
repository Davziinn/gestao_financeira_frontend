/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"

export interface ITransacao {
    id: string
    data: string
    descricao: string
    categoria: string
    valor: string
    tipo: "Entrada" | "Saida"
}

interface ITransacaoContextProps {
    transacoes: ITransacao[]
    adicionarTransacao: (transacao: ITransacao) => void
    editarTransacao: (transacaoAtualizada: ITransacao) => void
    deletarTransacao: (id: string) => void // <- aqui
}

export const TransacaoContext = createContext<ITransacaoContextProps | undefined>(undefined)

export const TransacaoProvider = ({ children }: { children: React.ReactNode }) => {
    const [transacoes, setTransacoes] = useState<ITransacao[]>([])

    const adicionarTransacao = (transacao: ITransacao) => {
        setTransacoes(prev => [transacao, ...prev])
    }

    const editarTransacao = (transacaoAtualizada: ITransacao) => {
        setTransacoes(prev =>
            prev.map(t => t.id === transacaoAtualizada.id ? transacaoAtualizada : t)
        )
    }

    const deletarTransacao = (id: string) => {
        setTransacoes(prev => prev.filter(t => t.id !== id))
    }

    return (
        <TransacaoContext.Provider value={{ transacoes, adicionarTransacao, editarTransacao, deletarTransacao }}>
            {children}
        </TransacaoContext.Provider>
    )
}
