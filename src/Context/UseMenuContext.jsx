import {  useEffect, useState } from "react";

const UseMenuContext = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=> res.json())
        .then(data=> setMenu(data))
        .catch(e=> console.log(e.message))
    }, [])
    return [menu]
};

export default UseMenuContext;