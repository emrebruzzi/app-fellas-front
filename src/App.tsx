import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import MyFlights from "./pages/MyFlights/my-flight";
import Navbar from "./components/Navbar";

function App (){
  return (

    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/my-flights" element={<MyFlights/>}/>
    </Routes>
   
    </>
  )
}
export default App ;