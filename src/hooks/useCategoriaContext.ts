import { useContext } from "react"
import { CategoriaContext } from "../contexts/CategoriaContext"

export const useCategoriaContext = () => {
    const context = useContext(CategoriaContext);

    if (!context) {
        throw new Error ("useCategoria deve ser usado dentro de um CategoriaProvider")
    }

    return context
}