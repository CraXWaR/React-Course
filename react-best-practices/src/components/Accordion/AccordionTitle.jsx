import {useAccordionContext} from "./Accordion.jsx";
import {useAccordionItem} from "./AccordionItem.jsx";

export default function AccordionTitle({className, children}) {
    const {toggleItem} = useAccordionContext();
    const id = useAccordionItem();

    return (<h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>);
}