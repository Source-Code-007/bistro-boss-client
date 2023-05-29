import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { authContextData } from './AuthContext';

const CartContext = () => {
    const { user} = useContext(authContextData)

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:2500/cart-item?email=${user?.email}`).then(
            (res) => res.json(),
          ),
      })
return   {data, error, isLoading, isFetching}
};

export default CartContext;