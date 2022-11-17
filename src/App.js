import "./App.scss";
import Image1 from "../src/asests/images/Image-1.png";
import Navbar from "./components/Navbar ";

function App() {
  return (
    <div className="App mb50">
      <Navbar />
      <div className="container">
        <div className="body-container">
          <div className="left-body-conatiner">
            <p className="bneed-heading-2">BNEED</p>
            <p className=" big-heading-bneed ">
              A New Era Of Our Digital Business Platform
            </p>
            <p className="container-item-2">
              We work with you to transform your organization, driving bold
              ideas and pragmatic solutions.
            </p>
            <button className=" contact-us-btn mt ">CONTACT US</button>
          </div>
          <div className="right-body-conatiner">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="mt8">
          <button className="button btn-xs">kjfeiwef</button>
        </div>
      </div>
    </div>
  );
}

export default App;
