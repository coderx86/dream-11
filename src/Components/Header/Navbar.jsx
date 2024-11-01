import logo from '../../assets/logo.png';
import coin from '../../assets/coin.png'

const Header = () => {
    return (
        <div className='sticky top-0 z-10 shadow-md bg-white/30 backdrop-blur-sm mt-12 pb-6'>
            <div className='w-[85%] mx-auto flex justify-between items-center '>
                <img className='' src={logo}/>
                <div className='flex gap-11 items-center'>
                    <ul className='flex gap-11'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                    <div>
                        <button className='flex gap-2 border-[#1313131a] border-2 rounded-xl px-5 py-4'>
                            <h2 className='font-semibold text-[#131313b3]'>0 Coin</h2>
                            <img src={coin} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
