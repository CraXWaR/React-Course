import {useAccordionContext} from "./Accordion.jsx";
import {useAccordionItem} from "./AccordionItem.jsx";

export default function AccordionContent({className, children}) {
    const {openItemId} = useAccordionContext();
    const id = useAccordionItem();

    const isOpen = openItemId === id;

    return (<div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>);
}