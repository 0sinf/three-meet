import { Route, Routes } from "react-router";
import "./App.css";
import End from "./pages/End";
import Home from "./pages/Home";
import Section01 from "./pages/Section01";
import Section02 from "./pages/Section02";
import Section03 from "./pages/Section03";
import Section04 from "./pages/Section04";
import Section05 from "./pages/Section05";
import Section06 from "./pages/Section06";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section01" element={<Section01 />} />
      <Route path="/section02" element={<Section02 />} />
      <Route path="/section03" element={<Section03 />} />
      <Route path="/section04" element={<Section04 />} />
      <Route path="/section05" element={<Section05 />} />
      <Route path="/section06" element={<Section06 />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
}

export default App;
