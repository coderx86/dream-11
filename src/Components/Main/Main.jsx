import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Main = () => {
    const [isActive, setisActive] = useState(true);
    
    return (
        <div>
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
                        Selected (0)
                    </button>
                </div>
            </div>
            <div 
            className={`
                ${!isActive? 'hidden' : 'block'}
                `}>
                <Players></Players>
            </div>
            <div
             className={`
                ${isActive? 'hidden' : 'block'}
                `}
            >
                <SelectedPlayers></SelectedPlayers>
            </div>
        </div>
    );
};

export default Main;