import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <body>
      <div className="card">
        <p>ADVICE #{advice.id}</p>
        <h2>"{advice.advice}"</h2>
        <img className="quote" src="pattern-divider-desktop.svg" alt="line" />
        <img className="mob" src="pattern-divider-mobile.svg" alt="line" />
        <button className="dice" onClick={getAdvice}>
          {" "}
          <img src="icon-dice.svg" alt="dice" />
        </button>
      </div>
    </body>
  );
}

export default App;
