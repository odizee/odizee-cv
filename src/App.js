import Header from "./components/Header";
import "./App.scss";
import Background from "./components/Background";
import Achivements from "./components/Achivements";
import { useState } from "react";
import Cover from "./components/Cover";
function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="app-background">
          <Background />
        </div>
        <div className="app-achievment">
          {toggle ? <Achivements /> : <Cover />}
          <div onClick={handleToggle}>
            <div className="switch-button">
              <input className="switch-button-checkbox" type="checkbox"></input>
              <label className="switch-button-label" for="">
                <span className="switch-button-label-span">CV</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
