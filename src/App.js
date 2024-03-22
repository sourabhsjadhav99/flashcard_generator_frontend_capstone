

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCard from "./pages/CreateCard";
import DisplayCards from "./pages/DisplayCards";
import CardDetails from "./pages/CardDetails";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import './App.css'

function App() {
  return (
    <div >
      <>
        <Header />
        <div className="lg:px-[80px] lg:py-[40px] md:p-[40px] sm:p-[20px]  xs:p-[20px] p-[10px] bg-orange-50">
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route path="/" element={< CreateCard />} />
              <Route path="/DisplayCards" element={<DisplayCards />} />
              <Route path="/CardDetails" element={<CardDetails />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>


      </>

    </div>
  );
}
export default App



