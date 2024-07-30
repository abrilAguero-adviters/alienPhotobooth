import { React, useEffect, useContext, useState } from "react";
import { CanvasContext } from "../../helpers/context/Context";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { InitControls } from "../../helpers/InitControls";
import Web3Modal from "web3modal";
import "./connectWallet.css";
import { fabric } from "fabric";

function ConnectWallet() {
  const [web3Modal, setWeb3Modal] = useState(null);
  const { canvas, setCanvas, IsPageEnabled, setIsPageEnabled } =
    useContext(CanvasContext);

  const [IsEthNetwork, setIsEthNetwork] = useState(true);
  const [IsWalletConnected, setIsWalletConnected] = useState(false);
  const [showEthAlert, setshowEthAlert] = useState(false);

  async function connectWallet() {
    const provider = await web3Modal.connect();
    setshowEthAlert(provider.chainId != "0x1");
    setIsEthNetwork(provider.chainId == "0x1");
    setIsWalletConnected(true);

    provider.on("accountsChanged", (accounts) => {
      setIsWalletConnected(true);
    });

    provider.on("chainChanged", (chainId) => {
      setshowEthAlert(chainId != "0x1");
      setIsEthNetwork(chainId == "0x1");
    });
  }

  const disconnectWallet = async () => {
    try {
      setIsWalletConnected(true);
    } catch {}
  };

  useEffect(() => {
    try {
      if (!canvas) {
        setCanvas(initCanvas());
        InitControls();
      }
      document.getElementsByClassName("upper-canvas")[0].style.pointerEvents =
        "all";
    } catch {}
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 500,
      width: 1500,
      backgroundColor: "white",
      preserveObjectStacking: true,
    });

  useEffect(() => {
    setIsPageEnabled(true);
    document.documentElement.setAttribute(
      "data-disabled",
      !(IsWalletConnected && IsEthNetwork)
    );
  }, [IsWalletConnected, IsEthNetwork]);

  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);

  useEffect(() => {
    // var Web3Modal
    //     if(typeof(window.Web3Modal) !== 'undefined'){
    //       Web3Modal = window.Web3Modal.default;
    //     }

    const providerOptions = {
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "The Alien Boy Photobooth", // Required
          infuraId: "597f81dddea0492ca599a7e789349477", // Required
          chainId: 1, // Optional. It defaults to 1 if not provided
        },
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "597f81dddea0492ca599a7e789349477",
        },
      },
      fortmatic: {
        package: window.Fortmatic,
        options: {
          key: "pk_live_C95B642EE4E358FD", // production
        },
      },
    };

    var _Web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      network: "mainnet", // rinkeby | mainnet
      providerOptions, // required
    });

    setWeb3Modal(_Web3Modal);
  }, []);
  return (
    <>
      <div className={`EthAlert ${showEthAlert ? "EthAlertOpen" : ""}`}>
        Oops! Please change to Ethereum network
        <div onClick={() => setshowEthAlert(false)}>x</div>
      </div>
      <div className="connectWalletWrapper">
        <button
          onClick={IsWalletConnected ? disconnectWallet : connectWallet}
          className={"connectWallet"}>
          {IsWalletConnected ? "Disconnect wallet" : "Connect wallet"}
        </button>
        <span
          className={`connectWalletIndicator ${
            !IsWalletConnected && "connectWalletIndicatorOff"
          }`}></span>
      </div>
    </>
  );
}

export default ConnectWallet;
