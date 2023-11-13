import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [ip, setIp] = useState('');
    const handleSubmit = () => {

        // never ever do this in React 
        //onSubmit(
        //    document.querySelector('input').value
        // )

        onSubmit(ip);
    }

    return <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }} >
            <input type="text" onChange={(e) => {
                setIp(e.target.value)
            }} />
        </form>
    </div>
}

export default SearchBar;