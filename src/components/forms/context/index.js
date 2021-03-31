import React, { createContext, useReducer } from "react"
import appReducer, { initialState, actions as appActions } from './reducer';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const actions = {
        triggerMenu: (menu) => {
            dispatch({ type: appActions.ACTIVATE_MENU, payload: { menu } });
        },
        changeSize: (size) => {
            dispatch({ type: appActions.CHANGE_SIZE, payload: { size } })
        },
        selectTheme: (theme) => {
            dispatch({ type: appActions.SELECT_THEME, payload: { theme }});
        }
    }

    return (
        <FormContext.Provider value={{ state, actions }}>
            {children}
        </FormContext.Provider>
    )
}


export default FormContextProvider;