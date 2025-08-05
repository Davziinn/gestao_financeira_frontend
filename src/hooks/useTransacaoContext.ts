import { useContext } from "react"
import { TransacaoContext } from "../contexts/TransactionContext"

export const useTransacaoContext = () => {
    const context = useContext(TransacaoContext)

    if (!context) {
        throw new Error('useTransacaoContext deve ser usado dentro de um <TransacaoProvider>')
    }

    return context
}
