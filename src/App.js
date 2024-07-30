import { React, useState, useContext } from "react";
import BannerBuilder from "./containers/bannerBuilder/BannerBuilder.js";
import "./App.css";
import Navbar from "./containers/navbar/Navbar.js";
import { Footer } from "./containers/footer/footer.js";
import { CanvasContext } from "./helpers/context/Context.js";

const App = () => {
  const [canvas, setCanvas] = useState("");
  const [IsPageEnabled, setIsPageEnabled] = useState(true);
  return (
    <div className="App">
      <CanvasContext.Provider
        value={{ canvas, setCanvas, IsPageEnabled, setIsPageEnabled }}>
        <Navbar />
        <div className="content">
          <BannerBuilder />
        </div>
        <Footer />
      </CanvasContext.Provider>
    </div>
  );
};

export default App;
