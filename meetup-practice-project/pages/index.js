import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'React Developers Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    address: 'Tech Hub, Sofia, Bulgaria',
}, {
    id: 'm2',
    title: 'Frontend Masters Gathering',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    address: 'Innovation Center, Plovdiv, Bulgaria',
}, {
    id: 'm3',
    title: 'JavaScript Enthusiasts Night',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    address: 'Code Café, Varna, Bulgaria',
}, {
    id: 'm4',
    title: 'Next.js Power Session',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    address: 'Startup Lab, Burgas, Bulgaria',
},];

export default function HomePage() {
    return (<MeetupList meetups={DUMMY_MEETUPS}/>);
}