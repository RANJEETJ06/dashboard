import { createContext, useReducer } from "react";
import DarkmodeReducer from "./darkmodReducer";

const INITIAL_STATE = {
    darkMode: false,
};

export const DarkmodeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkmodeReducer, INITIAL_STATE);

    return (
        <DarkmodeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkmodeContext.Provider>
    );
};