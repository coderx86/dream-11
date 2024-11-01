import PropTypes from 'prop-types';
import { FaFlag } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Player = ({ player }) => {
    const {name, country, image, role, battingType, bowlingType, biddingPrice} = player
    return (
        <div className='p-6 border-[1px] rounded-2xl'>
            <div><img className='rounded-2xl w-full aspect-[376/240] object-cover mb-6' src={image} alt="" /></div>
            <div>
                <h2 className='flex items-center text-xl font-semibold mb-4 gap-4'><MdAccountCircle className='text-3xl' />{name}</h2>
                <div className='flex justify-between mb-4'>
                    <p className='flex items-center text-gray-400 gap-3'><FaFlag />{country}</p>
                    <p className='bg-[#1313130d] px-4 py-2 rounded-lg'>{role}</p>
                </div>
            </div>
            <hr/>
            <div className='mt-4'>
                <h3 className='font-bold mb-4'>Rating</h3>
                <div className='flex justify-between'>
                    <div className='font-semibold'>
                        <h3 className='mb-4'>{battingType}</h3>
                        <h3>Price: ${biddingPrice}</h3>
                    </div>
                    <div className='text-center'>
                        <p className='text-[#131313b3] mb-4'>{bowlingType}</p>
                        <button className='border-[1px] rounded-lg px-4 py-2'>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;