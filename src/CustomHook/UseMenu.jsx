import { useEffect, useState } from 'react';

const UseMenu = () => {
    const [menuLoading, setMenuLoading] = useState(true)
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:2500/menu-collection')
        .then(res=> res.json())
        .then(data=> {
            setMenu(data)
            setMenuLoading(false)
        })
        .catch(e=> console.log(e.message))
    }, [])
    return [menu, menuLoading]
};

export default UseMenu;