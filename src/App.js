import Clubs from "./Components/Clubs";
import Header from "./Components/Header";
import Standings from "./Components/Standings";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero-container">
        <Clubs />
        <Standings />
      </div>
    </div>
  );
}
