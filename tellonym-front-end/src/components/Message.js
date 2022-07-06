import React, {useState} from "react";

const Message = () => {
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('')
        //Send to backend
        //Store data

        (async() => {
            const result = await fetch()
        })()
    }

    return(
        <form>
            <input
            type='text'
            value={message}
            onChange={handleChange}
            placeholder='Send a message!'
            required
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Message