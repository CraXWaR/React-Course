import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    function addMeetup(meetupData) {
        console.log(meetupData);
    }

    return (<NewMeetupForm onAddMeetup={addMeetup}/>);
}