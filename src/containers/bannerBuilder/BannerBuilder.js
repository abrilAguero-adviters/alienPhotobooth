import { React } from "react";
import PanelControl from "../panelControl/PanelControl";
import { Tools } from "../canvasHeader/tools/Tools";
import "./bannerBuilder.css";

const BannerBuilder = () => {
  return (
    <div>
      <Tools />
      <div
        style={{ position: "relative", marginBottom: "-8px" }}
        className="canvasLayerContainer">
        <canvas id="canvas" />
        {/* {!IsPageEnabled && <div className='ConnectYourWallet'></div>} */}
      </div>
      <PanelControl />
    </div>
  );
};

export default BannerBuilder;
