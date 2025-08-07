import {useRef, useState} from "react";

export default function SearchableList({items, itemKeyFn, children}) {
    const [searchText, setSearchText] = useState('');
    const lastChange = useRef();

    const results = items.filter((item) => {
        return JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase())
    });

    function handleSearch(e) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchText(e.target.value);
        }, 500)
    }

    return (<div className='searchable-list'>
        <input type='search' placeholder='Search...' onChange={handleSearch}/>
        <ul>
            {results.map((item) => (<li key={itemKeyFn(item)}>{children(item)}</li>))}
        </ul>
    </div>)
}