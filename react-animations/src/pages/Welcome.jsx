import {Link} from 'react-router-dom';
import {motion, useScroll, useTransform} from 'framer-motion';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {
    const {scrollY} = useScroll();

    // Header content animations
    const headerY = useTransform(scrollY, [0, 200], [0, -50]);
    const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);

    // City image parallax
    const cityY = useTransform(scrollY, [0, 300], [0, 100]);
    const cityOpacity = useTransform(scrollY, [0, 200], [1, 0.5]);

    // Hero image depth effect
    const heroY = useTransform(scrollY, [0, 300], [0, -150]);
    const heroScale = useTransform(scrollY, [0, 200], [1, 1.2]);
    const heroOpacity = useTransform(scrollY, [0, 250], [1, 0.8]);

    return (<>
        <header id="welcome-header">
            <motion.div
                id="welcome-header-content"
                style={{
                    y: headerY, opacity: headerOpacity,
                }}
            >
                <h1>Ready for a challenge?</h1>
                <Link id="cta-link" to="/challenges">
                    Get Started
                </Link>
            </motion.div>

            <motion.img
                src={cityImg}
                alt="A city skyline touched by sunlight"
                id="city-image"
                style={{
                    y: cityY, opacity: cityOpacity,
                }}
            />

            <motion.img
                src={heroImg}
                alt="A superhero wearing a cape"
                id="hero-image"
                style={{
                    y: heroY, scale: heroScale, opacity: heroOpacity,
                }}
            />
        </header>

        <main id="welcome-content">
            <section>
                <h2>There&apos;s never been a better time.</h2>
                <p>
                    With our platform, you can set, track, and conquer challenges at
                    your own pace. Whether it&apos;s personal growth, professional
                    achievements, or just for fun, we&apos;ve got you covered.
                </p>
            </section>

            <section>
                <h2>Why Challenge Yourself?</h2>
                <p>
                    Challenges provide a framework for growth. They push boundaries,
                    test limits, and result in genuine progress. Here, we believe
                    everyone has untapped potential, waiting to be unlocked.
                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul>
                    <li>Custom challenge creation: Set the rules, define your pace.</li>
                    <li>
                        Track your progress: See your growth over time with our analytics
                        tools.
                    </li>
                    <li>
                        Community Support: Join our community and get motivated by peers.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Join Thousands Embracing The Challenge</h2>
                <p>
                    “I never realized what I was capable of until I set my first
                    challenge here. It&apos;s been a transformative experience!” - Alex
                    P.
                </p>
            </section>
        </main>
    </>);
}
