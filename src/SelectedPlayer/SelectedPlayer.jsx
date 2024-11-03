import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({ player, removePlayer }) => {
    const {name, image, battingType, playerId} =player;
    return (
        <div className='p-6 border-2 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='aspect-[1/1] object-cover size-[80px] rounded-2xl mr-6' src={image} alt="" />
                    <div>
                        <h3 className='font-semibold text-2xl mb-3'>{name}</h3>
                        <p className='text-[#13131399]'>{battingType}</p>
                    </div>
                </div>
                <div>
                    <button 
                    className='text-red-600 text-3xl'
                    onClick={()=>removePlayer(playerId, player.biddingPrice)}>
                    <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    player: PropTypes.array,
    removePlayer: PropTypes.func
};

export default SelectedPlayer;
