import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Header/Navbar"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-[85%] mx-auto ">
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
