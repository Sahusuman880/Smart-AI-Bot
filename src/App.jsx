import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { UserContext } from "./context/UserContext";

function App() {
  const [startRes, setStartRes] = useState(false);
  const [popUp, setPopUp] = useState(false);
  let value = {
    startRes,
    setStartRes,
    popUp,
    setPopUp,
  };
  return (
    <>
      <UserContext.Provider value={value}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
