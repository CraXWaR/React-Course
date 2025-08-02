import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

import {useRouter} from "next/router";

export default function NewMeetup() {
    const router = useRouter();

    async function addMeetup(meetupData) {
        const res = await fetch("/api/new-meetup", {
            method: "POST", body: JSON.stringify(meetupData), headers: {"Content-Type": "application/json"},
        });

        const data = await res.json();
        console.log(data.message, data.result);

        router.push("/");
    }

    return (<>
        <Head>
            <title>Create a New Meetup</title>
            <meta name="description" content="Add your own learning meetup and share it with others."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetup}/>
    </>);
}