import { useEffect, useState } from 'react';

const UseMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:2500/menu-collection')
        .then(res=> res.json())
        .then(data=> setMenu(data))
        .catch(e=> console.log(e.message))
    }, [])
    return [menu]
};

export default UseMenu;