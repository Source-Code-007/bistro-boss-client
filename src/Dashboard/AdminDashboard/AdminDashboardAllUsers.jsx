import UseSectionTitle from "../../HelpingCompo/UseSectionTitle";
import { Puff } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AdminDashboardAllUsers = () => {

    const { isLoading, error, data: users, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:2500/users', { method: 'GET', headers: { Authorization: localStorage.getItem('jwt-token') } }).then(
                (res) => res.json(),
            ),
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
                fetch(`http://localhost:2500/users/${id}`, { method: 'DELETE', headers: { Authorization: localStorage.getItem('jwt-token') } })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
                                    {users?.map((user, ind) => {
                                        const { _id, name, email, photo, role } = user
                                        return <tr key={_id}>
                                            <td>{ind + 1}</td>
                                            <td>
                                                <img className="rounded-full h-10 w-10" src={photo} />
                                            </td>
                                            <td>{name}</td>
                                            <td className="text-center">{email}</td>
                                            <td>{role}</td>
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