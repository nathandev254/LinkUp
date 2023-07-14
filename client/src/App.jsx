import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feeds from "./components/Feeds";
import Profile from "./components/Editprofile";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Bookmark from './components/Bookmark'
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="" element={<Home />}>
            <Route path="home" element={<Feeds/>}/>
            <Route path="notifications" element={<Notifications/>}/>
            <Route path="bookmark" element={<Bookmark/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="inbox" element={<Messages/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
