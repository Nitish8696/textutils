import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is enabled", "success");
      document.title = "jaat-dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      document.title = "jaat-light mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar about="jaat land" title="jaat" mode={mode} toggleMode={toggleMode}/>
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
