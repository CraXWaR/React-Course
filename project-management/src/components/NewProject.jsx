import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAddProject, onCancelProject}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSaveProject() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredDate.trim().length === 0) {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle, description: enteredDescription, dueDate: enteredDate,
        });
    }

    return (<>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-600 mt-4 my-4'>Invalid Input</h2>
            <p className="text-stone-500 mb-4">Please fill all the required fields.</p>
            <p className="text-stone-500 mb-4">Please make sure u provide a valid value.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancelProject}>Cancel Project
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSaveProject}>Create Project
                    </button>
                </li>
            </menu>
            <div className="px-8">
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" isTextarea/>
                <Input type="date" ref={date} label="Due Date"/>
            </div>
        </div>
    </>);
}