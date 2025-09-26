'use client';

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    useEffect(() => {
       document.body.classList.remove('light', 'dark')
       document.body.classList.add(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
  return useContext(ThemeContext);
}