import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
