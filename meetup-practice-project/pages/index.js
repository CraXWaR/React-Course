import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'React Developers Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    address: 'Tech Hub, Sofia, Bulgaria',
    details: 'Join React developers for a full-day workshop and networking event.'
}, {
    id: 'm2',
    title: 'Frontend Masters Gathering',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    address: 'Innovation Center, Plovdiv, Bulgaria',
    details: 'Join React developers for a full-day workshop and networking event.'
}, {
    id: 'm3',
    title: 'JavaScript Enthusiasts Night',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    address: 'Code Café, Varna, Bulgaria',
    details: 'Join React developers for a full-day workshop and networking event.'
}, {
    id: 'm4',
    title: 'Next.js Power Session',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    address: 'Startup Lab, Burgas, Bulgaria',
    details: 'Join React developers for a full-day workshop and networking event.'
},];

export default function HomePage(props) {
    return (<MeetupList meetups={props.meetups}/>);
}

export async function getStaticProps() {
    //simulate fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}