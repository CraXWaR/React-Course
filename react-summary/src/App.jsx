import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

import {useState} from "react";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function hideModal() {
        setModalIsVisible(false);
    }
    function showModal() {
        setModalIsVisible(true);
    }

    return (<>
        <MainHeader onCreatePost={showModal}/>
        <main>
            <PostList isPosting={modalIsVisible} onStopPosting={hideModal}/>
        </main>
    </>);
}

export default App;
