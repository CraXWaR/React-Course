const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const randomInt = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {randomInt} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;