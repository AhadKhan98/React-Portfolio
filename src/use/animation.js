import { useState, useContext, useEffect } from 'react';

export function useAnimation() {

    const [animation, setAnimation] = useState('')
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        setAnimation('');
        setTimeout(() => setAnimation('fade-in'), 50)
    }, []);


    return {
        animation
    }
}
