

import NotFound from '../Error404'
import { useEffect, useState } from 'react';
import { getManufacturer} from '../getData';

const Manufacture = () => {
    const [manuf,setManuf] = useState([]);

    async function loaderManuf (){
        const data = await getManufacturer()
        setManuf(data);
    }

    useEffect(()=>{
        loaderManuf();
    },[])

    const out = manuf.map((item) => (<ul key={item.id}><li>{item.name}</li></ul>))
    return out? <>{out}</>:<NotFound/>
}

export default Manufacture