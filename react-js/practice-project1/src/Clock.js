import {useState, useEffect} from 'react';

function Clock (){
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timer = setInterval(() =>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        return ()=> clearInterval(timer);
    },[]);

    return <h2>Current time :{time}</h2>;
}

export default Clock;