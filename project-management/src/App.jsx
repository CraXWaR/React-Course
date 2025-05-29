import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined, projects: []
    });

    function handleAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState, selectedProjectId: null,
            }
        })
    }

    let content;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject/>;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onAddProject={handleAddProject}/>;
    }

    return (<main className="h-screen my-8 flex">
        <Sidebar onAddProject={handleAddProject}/>
        {content}
    </main>);
}

export default App;
