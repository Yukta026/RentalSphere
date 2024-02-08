import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
