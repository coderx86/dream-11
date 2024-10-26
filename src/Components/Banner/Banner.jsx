import './Banner.css';
import Label from '../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className="backImg rounded-xl mt-6 mb-20 text-white flex flex-col items-center justify-center text-center gap-6">
            <img src={Label} alt="" />
            <div>
                <h1 className='mb-4 text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-[#ffffffb3] text-2xl'>Beyond Boundaries Beyond Limits</h3>
            </div>
            <div className='border-[#E7FE29] border-2 rounded-xl'>
                <button className='bg-[#E7FE29] text-black font-bold px-5 py-4 rounded-xl m-2'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;