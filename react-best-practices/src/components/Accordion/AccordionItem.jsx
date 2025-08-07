import {createContext, useContext} from "react";

const AccordionItemContext = createContext({});

export function useAccordionItem() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('useAccordionItem() must be used with an AccordionItemProvider');
    }

    return ctx;
}

export default function AccordionItem({id, className, children}) {


    return (<AccordionItemContext.Provider value={id}>
        <li className={className}>
            {children}
        </li>
    </AccordionItemContext.Provider>);
}