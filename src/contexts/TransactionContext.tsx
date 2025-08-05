/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

interface ITransacao {
    data: string;
    descricao: string;
    categoria: string;
    valor: string;
    tipo: string;
    entrada: boolean;
}

interface ITransacaoContextProps {
    transacoes: ITransacao[];
    adicionarTransacao: (transacao: ITransacao) => void;
}

export const TransacaoContext = createContext<ITransacaoContextProps | undefined>(undefined)

export const TransacaoProvider = ({ children }: { children: React.ReactNode }) => {
    const [transacoes, setTransacoes] = useState<ITransacao[]>([])

    const adicionarTransacao = (transacao: ITransacao) => {
        setTransacoes((prev) => [transacao, ...prev])
    }

    return (
        <TransacaoContext.Provider value={{ transacoes, adicionarTransacao }}>
            {children}
        </TransacaoContext.Provider>
    )
}