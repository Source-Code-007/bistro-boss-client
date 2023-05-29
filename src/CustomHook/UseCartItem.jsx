import { useContext } from 'react';
import { authContextData } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';

const UseCartItem = () => {
    const { user} = useContext(authContextData)

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:2500/cart-item?email=${user?.email}`).then(
            (res) => res.json(),
          ),
          enabled: !!user
      })
return   {cartItems: data, error, isLoading, refetch}
};

export default UseCartItem;