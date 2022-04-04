import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/:owner/:repo" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
