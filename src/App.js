import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="app">
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
