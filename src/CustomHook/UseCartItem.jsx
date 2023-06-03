import { useContext } from 'react';
import { authContextData } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';

const UseCartItem = () => {
    const { user, loading } = useContext(authContextData)

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:2500/cart-item?email=${user?.email}`).then(
            (res) => res.json(),
          ),
          enabled: !loading
      })
return   {cartItems: data, error, isLoading, refetch}
};

export default UseCartItem;