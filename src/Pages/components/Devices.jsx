
import NotFound from '../Error404'
import { useEffect, useState } from 'react';
import { getDevices } from '../getData';

const Device = () => {
    const [devices,setDevices] = useState([]);

    async function loaderDevices (){
        const data = await getDevices()
        setDevices(data);
    }

    useEffect(()=>{
        loaderDevices();
    },[])

    const out = devices.map((item) => (<ul key={item.id}><li>{item.name}</li></ul>))
    
    return out? <>{out}</>:<NotFound/>
}

export default Device