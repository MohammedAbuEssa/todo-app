import { createContext } from 'react';
export const SettingsContext = createContext();
export default function Settings(props) {
    const state = {
        itemsToShow: 3,           
        hideCompleted: true,
        defaultSort: 'difficulty'
    }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}