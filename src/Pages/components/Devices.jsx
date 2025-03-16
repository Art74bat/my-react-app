// устройства для вормы на странице Home
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

    const out = devices.map((item) => (<option key={item.id}>{item.name}</option>))
    
    return out? <>{out}</>:<NotFound/>
}

export default Device