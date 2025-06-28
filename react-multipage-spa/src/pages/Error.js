import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (<>
            <MainNavigation/>
            <main>
                <h1>Error</h1>
                <p>Wrong url!</p>
            </main>
        </>);
}

export default ErrorPage;