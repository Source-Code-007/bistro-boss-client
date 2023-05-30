import { useEffect, useState } from "react";

const AdminDashboardAllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:2500/users', {method: 'GET', headers:{Authorization: localStorage.getItem('jwt-token')}})
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(e=> console.log(e.message))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default AdminDashboardAllUsers;