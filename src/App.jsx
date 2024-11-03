import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Header/Navbar"
import Main from "./Components/Main/Main"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players, setplayers] =useState([]);
  const [balance, setbalance]= useState(0);
  const addPlayers = (player) => {
    if (player.biddingPrice > balance) {
      toast.error('Not enough balance! Please claim free credit first.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return;
  }
    if (players.find(p => p.playerId === player.playerId)) {
      toast.error('Player already selected', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else if (players.length >= 6) {
      toast.error('Sorry! You can only select up to 6 players.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      setplayers([...players, player]);
      toast.success(`Congrates !! ${player.name} is now your squad.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      const newBalance = balance - player.biddingPrice;
      setbalance(newBalance);
    }
};

  const removePlayer = (playerId, biddingPrice) => {
    const updatedPlayers = players.filter(player => player.playerId !== playerId);
    setplayers(updatedPlayers);
    toast.warn('Player removed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    const upDatedBal = balance + biddingPrice;
    setbalance(upDatedBal);
  };

  const toHandler = () => {
  setbalance((prevBalance) => prevBalance + 600000);
  toast.success(`Successfully credited 600,000 coins to your balance.`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
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
      <ToastContainer />
    </>
  )
}

export default App
