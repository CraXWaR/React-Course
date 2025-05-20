import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConceptData from "./components/CoreComponentsData";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleClick(btn) {
        setSelectedTopic(btn);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => <CoreConceptData key={concept.title} {...concept}/>)}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isActive={selectedTopic === 'components'}
                                   onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isActive={selectedTopic === 'props'}
                                   onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isActive={selectedTopic === 'state'}
                                   onClick={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {!selectedTopic ? <p>Select a topic to read.</p> : <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
