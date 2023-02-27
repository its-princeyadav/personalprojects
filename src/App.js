import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common components/Navbar ";
import Footer from "./common components/Footer";
import Home from "./Component/Home";
import Aboutpage from "./Component/Aboutpage";
import Contact from "./Component/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
