import {useRef, useState} from "react";
import Modal from "./Modal.jsx";

export default function NewTask({onAddTask}) {
    const [enteredTask, setEnteredTask] = useState('');
    const modal = useRef();

    function handleTaskChange(e) {
        setEnteredTask(e.target.value);
    }

    function handleAddTask() {
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }

        onAddTask(enteredTask);
        setEnteredTask('');
    }

    return (<>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-600 mt-4 my-4'>Invalid Task</h2>
            <p className="text-stone-500 mb-4">Please make sure u provide a valid value.</p>
        </Modal>
        <div className="flex items-center gap-4">
            <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleTaskChange}
                   value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}>Add</button>
        </div>
    </>);
}