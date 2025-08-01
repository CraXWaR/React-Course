import MeetupDetails from '../../components/meetups/MeetupDetail';
import {DUMMY_MEETUPS} from "../index";

export default function DetailsPage(props) {
    return (
        <MeetupDetails
            image={props.image}
            title={props.title}
            address={props.address}
            details={props.details}
        />
    );
}

export async function getStaticPaths() {
    const paths = DUMMY_MEETUPS.map((meetup) => ({
        params: { id: meetup.id },
    }));

    return {
        fallback: false,
        paths,
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.id;

    const selectedMeetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

    return {
        props: {
            image: selectedMeetup.image,
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            details: selectedMeetup.details,
        },
    };
}
