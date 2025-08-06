import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

export default function Modal({title, children, onClose}) {
    const [isVisible, setIsVisible] = useState(true);

    function handleClose() {
        setIsVisible(false);
    }

    function handleAnimationComplete(definition) {
        if (definition === 'hidden') {
            onClose();
        }
    }

    return createPortal(<AnimatePresence>
        {isVisible && (<>
                <motion.div
                    className="backdrop"
                    onClick={handleClose}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                />
                <motion.dialog
                    open
                    className="modal"
                    variants={{
                        hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onAnimationComplete={handleAnimationComplete}
                >
                    <h2>{title}</h2>
                    {children}
                </motion.dialog>
            </>)}
    </AnimatePresence>, document.getElementById('modal'));
}
