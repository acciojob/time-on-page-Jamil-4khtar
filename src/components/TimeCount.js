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
        <div>{`You have been on this page for ${seconds} seconds.`}</div>
    )
}

export default TimeCount