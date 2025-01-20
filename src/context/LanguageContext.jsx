import { createContext, useState, useContext } from "react";

// Crea el contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // "es" para español como idioma predeterminado.

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);