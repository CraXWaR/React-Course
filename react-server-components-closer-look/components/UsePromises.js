'use client';

import {useState, use} from "react";

export default function UsePromise({users}) {
    const userList = users;
    const [count, setCount] = useState(0);

    return (<div className='rsc'>
        <h2>RSC with Data Fetching</h2>
        <p>
            Uses <strong>async / await</strong> for data fetching.
        </p>

        <button onClick={() => setCount(prev => prev + 1)}>
            Increment Count
        </button>
        <p>Current count: {count}</p>

        <ul>
            {userList.map((user) => (<li key={user.id}>
                {user.name} ({user.title})
            </li>))}
        </ul>
    </div>);
}
