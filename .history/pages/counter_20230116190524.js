import{ useEffect, useState } from "react"
import {useSearchParams} from 'next/navigation'
import { useRouter } from "next/router"
import styles from '../styles/counter.module.css'


export default function Counter() {

    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return(
        <>
    
        <div className="welcome">Welcome {isUser}</div>

        <div>{number}</div>
    <div className={styles.incrementbutton}> 
    <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
    <div class = "decrement-button">
       <button onClick={() => setNumber(number - 1)}>Decrement</button>
       </div>
        </>
    )
}