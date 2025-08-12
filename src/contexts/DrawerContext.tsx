import { createContext, useCallback, useState } from "react";

interface IDrawerOptions {
    icon: React.ReactNode;
    path: string;
    label: string;
}

interface IDrawerContextData {
    drawerOptions: IDrawerOptions[]
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

const DrawerContext = createContext({} as IDrawerContextData)


export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

    return (
        <DrawerContext.Provider value={{ drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    )
}