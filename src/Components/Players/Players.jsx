import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = () => {
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
                players.map(player => <Player key={players.playerId} player= {player}></Player>)
            }
            </div>
        </div>
    );
};

export default Players;