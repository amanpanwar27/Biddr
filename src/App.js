import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/auth/Login";
import Auth from "./Components/auth/auth";
import Landing from "./Components/home/Landing";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
