import React, { useState, useEffect } from 'react'

function TimeCount() {
    const [seconds, setSeconds] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSecs) => prevSecs + 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <p>{`You've been on this page for ${seconds} seconds.`}</p>
    )
}

export default TimeCount