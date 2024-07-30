import { React, useEffect, useContext, useState } from "react";
import { CanvasContext } from "../../helpers/context/Context";
import { fabric } from "fabric";
import { InitControls } from "../../helpers/InitControls";
import "./connectWallet.css";
import { isMobileDevice } from "../../web3/constants";

export default function ConnectMetaWallet() {
  const { ethereum } = window;
  const { canvas, setCanvas, IsPageEnabled, setIsPageEnabled } =
    useContext(CanvasContext);

  const [IsEthNetwork, setIsEthNetwork] = useState(true);
  const [IsWalletConnected, setIsWalletConnected] = useState(true);
  const [showEthAlert, setshowEthAlert] = useState(false);

  useEffect(() => {
    try {
      initWallet();

      initListeners();
    } catch {
      setIsWalletConnected(true);
    }
  }, []);

  useEffect(() => {
    try {
      setIsEthNetwork(window.ethereum.networkVersion == 1);
      setshowEthAlert(window.ethereum.networkVersion != 1);
      if (!canvas) {
        setCanvas(initCanvas());
        InitControls();
      }

      document.getElementsByClassName("upper-canvas")[0].style.pointerEvents =
        "all";
    } catch {}
  }, [IsWalletConnected]);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 500,
      width: 1500,
      backgroundColor: "white",
      preserveObjectStacking: true,
    });

  const initWallet = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });

      setIsWalletConnected(true);

      if (accounts.length === 0) {
        connectWallet();
      }
    } catch {}
  };

  const connectWallet = async () => {
    try {
      setIsWalletConnected(true);
      // const account = await ethereum.request({ method: "eth_requestAccounts" });
      initListeners();
    } catch {}
  };

  const disconnectWallet = async () => {
    try {
      setIsWalletConnected(true);
    } catch {}
  };

  const connectWalletMobile = () => {
    if (!window.ethereum) {
      window.location =
        "https://metamask.app.link/dapp/app.thealienboy.com/photobooth/";
    }

    connectWallet();
  };

  const initListeners = () => {
    window.ethereum.on("networkChanged", function (networkId) {
      setshowEthAlert(networkId != 1);
      setIsEthNetwork(networkId == 1);
    });

    window.ethereum.on("accountsChanged", function (accounts) {
      setIsWalletConnected(true);
    });
  };

  useEffect(() => {
    setIsPageEnabled(true);
    document.documentElement.setAttribute(
      "data-disabled",
      !(IsWalletConnected && IsEthNetwork)
    );
  }, [IsWalletConnected, IsEthNetwork]);

  return (
    <>
      <div className={`EthAlert ${showEthAlert ? "EthAlertOpen" : ""}`}>
        Oops! Please change to Ethereum network
        <div onClick={() => setshowEthAlert(false)}>x</div>
      </div>

      <div className="connectWalletWrapper">
        {!isMobileDevice() ? (
          <button
            onClick={IsWalletConnected ? disconnectWallet : connectWallet}
            className={"connectWallet"}>
            {IsWalletConnected ? "Disconnect wallet" : "Connect wallet"}
          </button>
        ) : !IsWalletConnected ? (
          //   <a href={"https://metamask.app.link/dapp/app.thealienboy.com/photobooth/"}>
          <button onClick={connectWalletMobile} className={"connectWallet"}>
            Connect wallet
          </button>
        ) : (
          // </a>
          <button onClick={disconnectWallet} className={"connectWallet"}>
            Disconnect wallet
          </button>
        )}

        <span
          className={`connectWalletIndicator ${
            !IsWalletConnected && "connectWalletIndicatorOff"
          }`}></span>
      </div>
    </>
  );
}
