/* eslint-disable no-unused-vars */
import UseSectionTitle from "../../HelpingCompo/UseSectionTitle";
import { Puff } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash, FaUser, FaUserAstronaut } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../CustomHook/UseAxiosSecure";

const AdminDashboardAllUsers = () => {
    const [axiosSecure] = UseAxiosSecure()

    const { isLoading, error, data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>
            await axiosSecure.get('/users').then(res => res.data).catch(e => console.log(e.message))
    })

    // handle delete user func
    const handleDeleteUserFunc = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`users/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch() // refetch users after delete a user
                            toast.success('Item deleted successfully!', {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }
                    })
                    .catch(e => console.log(e.message))
            }
        })

    }

    // make admin func
    const makeRoleFunc = (id, role) => {
        axiosSecure.patch(`/make-role/${id}`, {role: role})
            .then(res => {
                refetch()
                console.log(res)
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="bg-slate-200 min-h-screen">

            <UseSectionTitle
                heading='Manage all users'
                subHeading='Users'
            ></UseSectionTitle>

            <div className="overflow-x-auto w-5/6 mx-auto py-20">
                {
                    isLoading ? <div className="flex justify-center">
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
                    </div> :
                        <div className="p-10 bg-slate-50">
                            <div className="font-bold text-2xl my-5">
                                <h2>Total users:{users.length}</h2>
                            </div>
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th className="text-center">Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {users.length && users.map((user, ind) => {
                                        const { _id, name, email, photo, role } = user
                                        return <tr key={_id}>
                                            <td>{ind + 1}</td>
                                            <td>
                                                <img className="rounded-full h-10 w-10" src={photo} />
                                            </td>
                                            <td>{name}</td>
                                            <td className="text-center">{email}</td>
                                            <td> <p>{role}</p> <span onClick={() => makeRoleFunc(_id, role)} className="btn btn-sm btn-error"> {role === 'user' ? 'make admin' : 'make user'}</span> </td>
                                            <td><span onClick={() => handleDeleteUserFunc(_id)} className="text-red-500 text-xl cursor-pointer"><FaTrash></FaTrash></span></td>
                                        </tr>
                                    })}
                                </tbody>

                            </table>
                        </div>
                }
            </div>
            <ToastContainer /><ToastContainer />
        </div>
    );
};

export default AdminDashboardAllUsers;