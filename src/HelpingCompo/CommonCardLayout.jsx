import CommonCard from './CommonCard';

const CommonCardLayout = ({items}) => {
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            {
                items.map(item => <CommonCard key={item.name} item={item}></CommonCard>)
            }
        </div>
    );
};

export default CommonCardLayout;