import { useContext, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCartItem from '../../CustomHook/UseCartItem';
import { authContextData } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddToCartBtn = ({ yummyItem}) => {
    const { user } = useContext(authContextData)
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { refetch } = UseCartItem()


    // handle add to cart func
    const handleAddToCartFunc = (item) => {
        setIsDisabled(true)

        //  if user is null then navigate to signin page
        if (!user) {
            Swal.fire({
                title: 'You need to login first!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } })
                }
            })
            return
        }

        const newItem = { ...item, email: user?.email }

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        }
        fetch(`http://localhost:2500/cart-item?email=${user?.email}`, option)
            .then(res => res.json())
            .then(data => {
                if (data.insertedId || data.modifiedCount) {
                    setIsDisabled(false)
                    refetch() // refetch cartItems data
                    toast.success('Item added in cart!', {
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

    return <button disabled={isDisabled} onClick={() => handleAddToCartFunc(yummyItem)} className="btn btn-error btn-outline gap-2">Add to cart <FaCartPlus></FaCartPlus> </button>
};

export default AddToCartBtn;