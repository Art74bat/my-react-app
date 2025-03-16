

import NotFound from '../Error404'
import { useEffect, useState } from 'react';
import { getManufacturer} from '../getData';

const Manufacture = () => {
    const [manuf,setManuf] = useState([]);
// производители для формы на странице Home
    async function loaderManuf (){
        const data = await getManufacturer()
        setManuf(data);
    }

    useEffect(()=>{
        loaderManuf();
    },[])

    const out = manuf.map((item) => (<option key={item.id}>{item.name}</option>))
    return out? <>{out}</>:<NotFound/>
}

export default Manufacture