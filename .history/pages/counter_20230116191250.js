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
    
        <div className={styles.welcome}>Welcome {isUser}</div>

        <div className= {styles.content} >
            <div>{number}</div>
        
        <div className={styles.buttons}>
    <div className={styles.incrementButton}> 
    <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
    <div class = {styles.decrementButton}>
       <button onClick={() => setNumber(number - 1)}>Decrement</button>
       </div>
       </div>
       </div>
        </>
    )
}