import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined, projects: [], tasks: [],
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState, selectedProjectId: null,
            }
        })
    }

    function handleAddProject(project) {
        setProjectsState(prevState => {
            const projectId = Math.random();

            const newProject = {
                ...project, id: projectId,
            }

            return {
                ...prevState, projects: [...prevState.projects, newProject], selectedProjectId: undefined,
            }
        });
    }

    function handleCancelCreateProject() {
        setProjectsState(prevState => {
            return {
                ...prevState, selectedProjectId: undefined,
            }
        })
    };

    function handleSelectProject(projectId) {
        setProjectsState(prevState => {
            return {
                ...prevState, selectedProjectId: projectId,
            }
        })
    }

    function handleDeleteProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
            }
        })
    }

    function handleAddTask(text) {
        setProjectsState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: text, projectId: prevState.selectedProjectId, id: taskId,
            }

            return {
                ...prevState, tasks: [newTask, ...prevState.tasks],
            }
        });
    }

    function handleDeleteTask(tasksId) {
        setProjectsState(prevState => {
            return {
                ...prevState, tasks: prevState.tasks.filter((task) => task.id !== tasksId),
            }
        })
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

    let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask}
                                   onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelCreateProject}/>;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onAddProject={handleStartAddProject}/>;
    }

    return (<main className="h-screen my-8 flex">
        <Sidebar onAddProject={handleStartAddProject} projects={projectsState.projects} onSelect={handleSelectProject}
                 selectedProject={projectsState.selectedProjectId}/>
        {content}
    </main>);
}

export default App;
