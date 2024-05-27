import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SingUp from "./pages/SingUp";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* header component  start*/}
      <Header />
      {/* header component end  */}

      {/* routes start  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      {/* routes end  */}
    </BrowserRouter>
  );
};

export default App;
