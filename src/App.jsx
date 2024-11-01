import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Header/Navbar"
import Main from "./Components/Main/Main"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-[85%] mx-auto ">
        <Banner></Banner>
        <Main></Main>
      </div>
    </>
  )
}

export default App
