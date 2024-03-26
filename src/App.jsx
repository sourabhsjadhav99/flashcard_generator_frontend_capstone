

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCard from "./pages/CreateCard";    // It contains form 
import DisplayCards from "./pages/DisplayCards";    // it contains all cards with pagination
import CardDetails from "./pages/CardDetails";    //It contain details of particular card, get using id
import NoPage from "./pages/NoPage";    //when routes not matches to anything
import Header from "./components/Header";   //it contains header of application
import NavigationBar from "./components/NavigationBar";   //it contains navigation links
import './App.css'

function App() {
  return (
    <div className=" min-h-screen bg-orange-50">
      <Header />
      <div className="lg:px-[80px] lg:py-[40px] md:p-[40px] sm:p-[20px]  xs:p-[20px] p-[10px] bg-orange-50">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={< CreateCard />} />
            <Route path="/DisplayCards" element={<DisplayCards />} />
            <Route path="/CardDetails/:id" element={<CardDetails />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App


