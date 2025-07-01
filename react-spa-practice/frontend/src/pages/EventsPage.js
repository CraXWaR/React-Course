import EventsList from "../components/EventsList";

export const DUMMY_EVENTS = [
    {
        id: 'e4',
        image: 'https://source.unsplash.com/featured/?startup',
        title: 'TechSpark Meetup',
        date: '2025-08-05',
        description: 'Startups collide over pizza and pitch decks. Connect, code, and caffeinate.',
    },
    {
        id: 'e5',
        image: 'https://source.unsplash.com/featured/?festival',
        title: 'Harvest Moon Fair',
        date: '2025-10-03',
        description: 'Folklore, food trucks, and fire dancers under the harvest moonlight.',
    },
    {
        id: 'e6',
        image: 'https://source.unsplash.com/featured/?yoga',
        title: 'Sunrise Yoga Retreat',
        date: '2025-09-18',
        description: 'Flow through your sun salutations in a pine-scented coastal grove.',
    },
    {
        id: 'e7',
        image: 'https://source.unsplash.com/featured/?photography',
        title: 'Lens & Light Workshop',
        date: '2025-07-25',
        description: 'Master golden hour portraits and street-style photography like a pro.',
    },
    {
        id: 'e8',
        image: 'https://source.unsplash.com/featured/?hackathon',
        title: 'Global Hack Wars',
        date: '2025-11-11',
        description: 'Teams from 20+ countries. One codebase. Zero sleep. Let the IDE battles begin.',
    },
    {
        id: 'e9',
        image: 'https://source.unsplash.com/featured/?theater',
        title: 'Underground Theater Night',
        date: '2025-08-27',
        description: 'Abstract, avant-garde, and slightly unsettling. Come if you dare.',
    },
    {
        id: 'e10',
        image: 'https://source.unsplash.com/featured/?robotics',
        title: 'Build-a-Bot Expo',
        date: '2025-12-01',
        description: 'A day of gears, circuits, and glorious mechanical chaos for all ages.',
    },
    {
        id: 'e11',
        image: 'https://source.unsplash.com/featured/?books',
        title: 'Lit & Lattes',
        date: '2025-10-15',
        description: 'Books, beans, and brilliant discussions in an ivy-covered cafe garden.',
    },
    {
        id: 'e12',
        image: 'https://source.unsplash.com/featured/?dance',
        title: 'Midnight Tango Social',
        date: '2025-09-02',
        description: 'Dress sharp. Step sharp. Spin your heart out until the sun peeks in.',
    },
    {
        id: 'e13',
        image: 'https://source.unsplash.com/featured/?gaming',
        title: 'LAN Inferno',
        date: '2025-08-14',
        description: 'Local legends bring their rigs for glory, memes, and monster energy highs.',
    },
];


function EventsPage() {
    return (<EventsList events={DUMMY_EVENTS} />);
}

export default EventsPage;