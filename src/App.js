import Header from "./components/Header";
import "./App.scss";
import Background from "./components/Background";
import Achivements from "./components/Achivements";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="app-background">
          <Background />
        </div>
        <div className="app-achievment">
          <Achivements />
        </div>
      </div>
    </div>
  );
}

export default App;
