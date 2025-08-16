import {useNavigate} from "react-router-dom";

import classes from "./Modal.module.css";

export default function Modal({children}) {
    const navigate = useNavigate();

    function closeModal() {
        navigate('..');
    }

    return (<>
        <div className={classes.backdrop} onClick={closeModal}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>);
}