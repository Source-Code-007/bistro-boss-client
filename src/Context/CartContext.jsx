import { useQuery } from '@tanstack/react-query';

const CartContext = () => {

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://localhost:2500/menu-collection').then(
            (res) => res.json(),
          ),
      })
return   {data, error, isLoading, isFetching}
};

export default CartContext;