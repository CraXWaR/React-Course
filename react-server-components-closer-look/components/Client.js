'use client'

import {useState} from "react";

export default function Client({children}) {
    const [count, setCount] = useState() //that's why we need to mark component as a client component

    console.log('Client rendered');
    return (<div className='client-cmp'>
        <h2>A React Client Component</h2>
        <p>
            Will be rendered on the client <strong>AND</strong> the server.
        </p>
        {children}
    </div>);
}