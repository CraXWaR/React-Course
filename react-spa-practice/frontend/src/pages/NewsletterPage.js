import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from '../components/PageContent';

function NewsletterPage() {
    return (<PageContent title="Join our awesome newsletter!">
        <NewsletterSignup/>
    </PageContent>);
}

export default NewsletterPage;

export async function action({request}) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server... (no need for this demo)
    console.log(email);
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

    if (email.trim().length > 0 && isValidEmail) {
        return {message: 'Signup successful!'};
    }

    return {message: 'Invalid email address. Please try again.'};
}