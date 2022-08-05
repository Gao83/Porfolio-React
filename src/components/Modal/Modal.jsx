import React, { useState } from 'react'

function Modal() {

    const [message, setMessage] = useState(true)

    return (
        <div>
            <p>Your message has been sent succesfully! Thanks for contact me.</p>
            <button onClick={setMessage}></button>

        </div>
    )
}

export default Modal