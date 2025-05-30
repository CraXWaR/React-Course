import image from '../assets/no-projects.png';
import Button from "./Button.jsx";

export default function NoProjectSelected({onAddProject}) {
    return (<div className='mt-24 text-center w-2/3'>
        <img src={image} alt="No project selected" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No project selected</h2>
        <p className="text-stone-400 mb-4">Please select a project from the sidebar or create a new one</p>
        <p className='mt-8'>
            <Button onClick={onAddProject}>
                Create new project
            </Button>
        </p>
    </div>);
}