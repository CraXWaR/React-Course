import {Link, useParams} from "react-router-dom";

export default function ProductDetails() {
    const params = useParams();

    return (<>
            <h1>Product Details</h1>
            <p>{params.id}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>);
}