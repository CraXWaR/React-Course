import {createContext, useContext, useState} from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error("useAccordionContext must be used within AccordionContext");
    }

    return ctx;
}

export default function Accordion({children, className}) {
    const [openItem, setOpenItem] = useState(null);

    function toggleItem(id) {
        setOpenItem(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId: openItem, toggleItem,
    }

    return (<AccordionContext.Provider value={contextValue}>
        <ul className={className}>{children}</ul>
    </AccordionContext.Provider>);
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;