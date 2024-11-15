import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from 'prop-types';

const Main = ({ addPlayers, players, removePlayer }) => {
    const [isActive, setisActive] = useState(true);
    const addMorePlayer=()=>{
        setisActive(true);
        console.log("clicked")
    };
    return (
        <div className="mb-[350px]">
            <div className="flex justify-between items-center text-center mb-8 sticky top-24 z-50">
                <h2 className="text-3xl font-bold">Available Players</h2>
                <div className="">
                    <button 
                    onClick={() => setisActive(true)}
                    className={`border-gray-300 border-r-0 border-[1px] px-7 py-3 rounded-l-xl ${isActive ? 'bg-[#E7FE29] font-bold' : 'bg-white'}`}>
                        Available
                    </button>
                    <button
                    onClick={() => setisActive(false)} 
                    className={`border-gray-300 border-l-0 border-[1px] px-7 py-3 rounded-r-xl 
                    ${!isActive ? 'bg-[#E7FE29] font-bold' : 'bg-white'}`}>
                        Selected ({players.length})
                    </button>
                </div>
            </div>
            <div 
            className={`
                ${!isActive? 'hidden' : 'block'}
                `}>
                <Players 
                addPlayers={addPlayers}
                >
                </Players>
            </div>
            <div
             className={`
                ${isActive? 'hidden' : 'block'}
                `}
            >
                <SelectedPlayers
                players={players}
                removePlayer={removePlayer}
                addMorePlayer={addMorePlayer}
                >
                </SelectedPlayers>
            </div>
        </div>
    );
};

Main.propTypes = {
    addPlayers: PropTypes.func,
    players: PropTypes.array,
    removePlayer: PropTypes.func
}

export default Main;