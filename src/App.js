import "./App.scss";
import Background from "./components/Background";
import Achivements from "./components/Achivements";
import { useState } from "react";
import Cover from "./components/Cover";
function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className="main">
        <div className="app-background">
          <Background />
        </div>
        <div className="app-achievment">
          {toggle ? <Achivements /> : <Cover />}
          <div className="toggle">
            <label htmlFor="toggle">
              <input
                className="input"
                onClick={handleToggle}
                type="checkbox"
                id="toggle"
              />
              <div className="toggle-wrapper">
                <span className="selector"></span>
              </div>
              <p className="notification">
                <span className="selected"></span>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
