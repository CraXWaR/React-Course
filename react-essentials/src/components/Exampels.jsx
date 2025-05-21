import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";

export default function Exampels() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleClick(btn) {
        setSelectedTopic(btn);
    }

    return (
        <Section title="Examplese" id='examples'>
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
        </Section>
    );
}