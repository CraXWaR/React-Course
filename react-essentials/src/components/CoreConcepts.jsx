import {CORE_CONCEPTS} from "../data";
import CoreConceptData from "./CoreComponentsData";

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => <CoreConceptData key={concept.title} {...concept}/>)}
            </ul>
        </section>
    );
}