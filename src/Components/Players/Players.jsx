import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Player from "../Player/Player";

const Players = ({ addPlayers }) => {
    const [players, setplayers] = useState([])
    useEffect(()=>{
        fetch('playerInfo.json')
        .then(res => res.json())
        .then(data => setplayers(data))
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            {
                players.map(player => <Player 
                    addPlayers={addPlayers}
                    player= {player} 
                    key={player.playerId}>
                    </Player>)
            }
            </div>
        </div>
    );
};

Players.propTypes ={
    addPlayers: PropTypes.func
};

export default Players;