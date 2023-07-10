import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
