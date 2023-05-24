import { useLocation } from "react-router-dom";

const CommonParallex = ({img, title, subTitle}) => {
    const {pathname} = useLocation()
    return (
        <div className='h-[550px] p-20 bg-cover bg-center bg-fixed flex justify-center items-center' style={{backgroundImage: `url('${img}')` }}>
                <div className={`${pathname === '/'? 'bg-slate-50' : 'bg-slate-800 bg-opacity-30' } p-20 w-4/6 rounded shadow text-center`}>
                    <h2 className="uppercase text-3xl">{title}</h2>
                    <p>{subTitle}</p>
                </div>
        </div>
    );
};

export default CommonParallex;