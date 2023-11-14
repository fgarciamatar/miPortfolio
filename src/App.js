
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cursor from "../src/components/Cursor";
import Preloader from "../src/components/Pre";
import "./App.css";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Project from "./pages/Project";
import Home from "./components/Homepage";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
