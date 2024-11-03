import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Header/Navbar"
import Main from "./Components/Main/Main"

function App() {
  const [players, setplayers] =useState([]);
  const [balance, setbalance]= useState(0);
  const addPlayers = (player) => {
    if (player.biddingPrice > balance) {
      alert("Not enough balance! Please claim free credit first.");
      return;
  }
    if (players.find(p => p.playerId === player.playerId)) {
        alert("This player has already been selected!");
    } else if (players.length >= 6) {
        alert("You can only select up to 6 players.");
    } else {
      setplayers([...players, player]);
      const newBalance = balance - player.biddingPrice;
      setbalance(newBalance);
    }
};

  const removePlayer = (playerId, biddingPrice) => {
    const updatedPlayers = players.filter(player => player.playerId !== playerId);
    setplayers(updatedPlayers);
    const upDatedBal = balance + biddingPrice;
    setbalance(upDatedBal);
  };

  const toHandler = () => {
  setbalance((prevBalance) => prevBalance + 600000);
  };

  return (
    <>
      <Navbar balance={balance}></Navbar>
      <div className="w-[85%] mx-auto ">
        <Banner toHandler={toHandler}></Banner>
        <Main 
        addPlayers={addPlayers} 
        players={players}
        removePlayer={removePlayer}></Main>
      </div>
    </>
  )
}

export default App
