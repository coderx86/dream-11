import PropTypes from 'prop-types';
import SelectedPlayer from '../../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({ players, removePlayer }) => {
    console.log(players)
    return (
        <div>
            <div className='flex flex-col gap-6'>
                {
                    players.map((selectedPlayer) => (
                        <SelectedPlayer 
                            key={selectedPlayer.playerId}
                            player={selectedPlayer}
                            removePlayer={removePlayer}
                        />
                    ))
                }
            </div>
            <div className='flex mt-12'>
                <div className="flex border-black border-2 rounded-2xl p-2">
                    <button className="bg-[#E7FE29] font-bold px-5 py-3 rounded-xl">
                        Add More Player
                    </button>
                </div>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    players: PropTypes.array
};

export default SelectedPlayers;
