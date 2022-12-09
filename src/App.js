import "./App.scss";

import Navbar from "./common components/Navbar ";
import Footer from "./common components/Footer";
import Firstfold from "./Component/Firstfold";
import Secondfold from "./Component/Secondfold";
import Aboutus from "../src/Component/Aboutus";
import Slick from "../src/Component/Slickslider";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Firstfold />
      <Secondfold />
      <Aboutus />
      <Slick />
      <Footer />
    </div>
  );
}

export default App;
