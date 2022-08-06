import React, {useState} from "react";

const Message = () => {
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    async function handleSubmit(e){
        e.preventDefault()
        //Send to backend
        //Store data
        const body = {message: message}

        try{
        
                const result = await fetch('https://tellonymapu.herokuapp.com/post', {
                    mode: 'cors',
                    method: 'POST',
                    headers: {"Content-Type": "application/json" },
                    body: JSON.stringify({message: message})
                })
                setMessage('')
                const data = await result.json()
                console.log(data)
        } catch(err){
            console.log(err)
            return('help')
        }
        
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