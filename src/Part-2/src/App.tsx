import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import BlankCard from "../pages/blankCard";
import WireFrameCard from "../pages/wireFrameCard";
import SOLUTION from "../pages/SOLUTION";
import NotFound from "../pages/NotFound";

import "./App.css";

function App() {

  return (
    <>
      <nav>
        <Link to="/">🏠 Home</Link> | <Link to="/wireFrameCard">Wire Frame Card</Link> | <Link to="/blankCard">Blank Card</Link> | <Link to="/SOLUTION">SOLUTION</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wireFrameCard" element={<WireFrameCard />} />
        <Route path="/blankCard" element={<BlankCard />} />
        <Route path="/SOLUTION" element={<SOLUTION />} />
        {/* Wildcard route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

        
    </>
  );
}

export default App;
