import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import UxCase1 from "./Pages/ux-case1";
import UxCase2 from "./Pages/ux-case2";
import UxCase3 from "./Pages/ux-case3";
import UxCase4 from "./Pages/ux-case4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ux-case1" element={<UxCase1 />} />
      <Route path="/ux-case2" element={<UxCase2 />} />
      <Route path="/ux-case3" element={<UxCase3 />} />
      <Route path="/ux-case4" element={<UxCase4 />} />
    </Routes>
  );
}

export default App;
