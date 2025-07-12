import PageContent from "../components/PageContent";

function HomePage() {
    return (<PageContent title="Welcome to Eventify 🎉">
        <p>
            Your go-to spot for managing events with style and simplicity.
            Create new events, view the full list, and update or delete with ease.
        </p>
        <p>
            Built with React, Redux, and a sprinkle of ambition. Get started by checking out
            the <strong>Events</strong> tab!
        </p>
    </PageContent>);
}

export default HomePage;