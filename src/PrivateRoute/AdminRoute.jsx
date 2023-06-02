import { Navigate } from "react-router-dom";
import UseAdmin from "../CustomHook/UseAdmin";

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = UseAdmin()
    if(isAdminLoading){
        return 'loading'
    }
    if(!isAdmin){
        return <Navigate to={'/signin'}></Navigate>
    }
    return children
};

export default AdminRoute;