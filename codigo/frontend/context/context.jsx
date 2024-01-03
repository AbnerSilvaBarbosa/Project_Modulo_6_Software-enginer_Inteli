const { createContext, useState } = require("react");

export const Context = createContext(null)

export function ContextProvider({ children }) {
    const [account, setAccount] = useState(null)


    return (
        <Context.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </Context.Provider>
    )
}

