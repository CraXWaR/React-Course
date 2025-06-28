import {Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function NavigateTo() {
        navigate('products');
    }

    return (<>
        <h1>Home</h1>
        <p>to <Link to='products'>the products</Link></p>
        <p>
            <button onClick={NavigateTo}>To...</button>
        </p>
    </>)
}

export default Home;