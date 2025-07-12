import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect, useRef} from "react";

function NewsletterSignup() {
    const fetcher = useFetcher();
    const {data, state} = fetcher;
    const inputRef = useRef();

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);

            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }, [data, state]);

    return (<fetcher.Form method="post" className={classes.newsletter} action='/newsletter'>
        <input
            type="email"
            name="email"
            ref={inputRef}
            placeholder="Sign up for newsletter..."
            aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
    </fetcher.Form>);
}

export default NewsletterSignup;