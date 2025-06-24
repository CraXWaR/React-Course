import Counter from './components/Counter';
import {Fragment} from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";

import {useSelector} from "react-redux";

function App() {
    const authentication = useSelector((state) => state.auth.isLoggedIn);

    return (<Fragment>
        <Header/>
        {!authentication && <Auth/>}
        {authentication && <UserProfile/>}
        <Counter/>
    </Fragment>);
}

export default App;
