import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import Place from "./components/SearchableList/Place.jsx";

import {PLACES} from "./places.js";

function App() {
    return (<main>
        <section>
            <h2>Why work with us?</h2>
            <Accordion className="accordion">
                <Accordion.Item id='1' className='accordion-item'>
                    <Accordion.Title className='accordion-item-title'>Tailored Experiences</Accordion.Title>
                    <Accordion.Content className='accordion-item-content'>
                        <article>
                            <p>🎯 No two travelers are alike, and neither are our trips. We customize every itinerary to
                                match your interests, pace, and budget.</p>
                            <p>From hidden local gems to bucket-list landmarks, your journey is uniquely yours.</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id='2' className="accordion-item">
                    <Accordion.Title className="accordion-item-title">
                        Stress-Free Planning
                    </Accordion.Title>
                    <Accordion.Content className="accordion-item-content">
                        <article>
                            <p>🧳 Say goodbye to travel headaches. We handle everything—from flights and hotels to
                                excursions and transfers—so you don’t have to.</p>
                            <p>All you need to do is pack your bags and enjoy the ride.</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="3" className="accordion-item">
                    <Accordion.Title className="accordion-item-title">
                        Local Expertise
                    </Accordion.Title>
                    <Accordion.Content className="accordion-item-content">
                        <article>
                            <p>🌐 Our global network of local guides and partners ensures you get authentic experiences
                                wherever you go.</p>
                            <p>We know the best spots, the best times, and the best ways to explore them.</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="4" className="accordion-item">
                    <Accordion.Title className="accordion-item-title">
                        24/7 Support
                    </Accordion.Title>
                    <Accordion.Content className="accordion-item-content">
                        <article>
                            <p>📞 Travel with peace of mind knowing our support team is available around the clock.</p>
                            <p>Whether it’s a last-minute change or an unexpected hiccup, we’ve got your back.</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="5" className="accordion-item">
                    <Accordion.Title className="accordion-item-title">
                        Trusted by Thousands
                    </Accordion.Title>
                    <Accordion.Content className="accordion-item-content">
                        <article>
                            <p>🌟 With over two decades of experience and thousands of happy travelers, our reputation
                                speaks for itself.</p>
                            <p>Join a community of adventurers who trust us to deliver unforgettable journeys.</p>
                        </article>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </section>
        <section>
            <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
                {(item) => <Place item={item}/>}
            </SearchableList>
        </section>
    </main>);
}

export default App;
