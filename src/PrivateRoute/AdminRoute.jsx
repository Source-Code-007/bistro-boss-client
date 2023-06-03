import { Navigate } from "react-router-dom";
import UseAdmin from "../CustomHook/UseAdmin";
import { Puff } from "react-loader-spinner";

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = UseAdmin()
    if(isAdminLoading){
        return <div className="min-h-screen flex justify-center items-center">
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
    }
    if(!isAdmin){
        return <Navigate to={'/signin'}></Navigate>
    }
    return children
};

export default AdminRoute;