import "./App.scss";

import Navbar from "./common components/Navbar ";
import Firstfold from "./Component/Firstfold";
import Secondfold from "./Component/Secondfold";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Firstfold />
      <Secondfold />
    </div>
  );
}

export default App;
