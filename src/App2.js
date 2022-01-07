import React, { useState, useEffect } from "react";
import "./App2.css";
import Footer from "./components2/footer/Footer";
import Main from "./components2/main/Main";
import Navbar from "./components2/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./components2/explore/Explore";
import address from "./address";
import Abi from "./newABI.json";
import Web3 from "web3";

let web3, accounts, contract;

function App2() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, SetBalance] = useState(0);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  let contract;

  useEffect(() => {
    if (localStorage.getItem("currentAccount")) {
      getNftData();
      setIsConnected(true);
    } else {
      setNfts([]);
    }
  }, [localStorage.getItem("currentAccount")]);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected check out MetaMask");
    }
    return provider;
  };

  const onLogin = async (provider) => {
    web3 = new Web3(provider);
    accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("connect to metaMask");
    } else {
      localStorage.setItem("currentAccount", accounts[0]);
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = async () => {
    localStorage.removeItem("currentAccount");
    setIsConnected(false);
  };

  const transfer = async (Firstname, Lastname, Id) => {
    const currentAccount = localStorage.getItem("currentAccount");
    const provider = detectProvider();
    web3 = new Web3(provider);
    console.log(Firstname, Lastname, Id);
    console.log(address.two);
    console.log(currentAccount);
    contract = new web3.eth.Contract(Abi, address.two);
    await contract.methods
      ._safeMint(currentAccount, Id, Firstname, Lastname)
      .send({ from: currentAccount });
  };
  let arr = [];

  const getNftData = async () => {
    console.log("get");
    setNfts((prev) => []);
    const provider = detectProvider();
    web3 = new Web3(provider);
    let accounts = localStorage.getItem("currentAccount");
    if (typeof accounts !== undefined) {
      accounts = localStorage.getItem("currentAccount");
    } else {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    }
    //Object.keys(addresses).forEach(async (key) => {

    // const state = { key: address.two, bool: true };

    let total;
    // let arr = [];
    contract = new web3.eth.Contract(Abi, address.two);
    total = await contract.methods.balanceOf(accounts).call();
    console.log("Totals Nfts: ", total, " ");

    for (let i = 1; i <= total; i++) {
      try {
        let num = parseInt(
          await contract.methods.ownerTokens(accounts, i).call()
        );

        let Ab = await contract.methods.tokenDetails(num).call();
        console.log("ab", Ab);
        // let uriReturned = await contract.methods.tokenURI(num).call();
        arr.push({
          fName: Ab.firstName,
          lName: Ab.lastName,
          id: Ab.tokenId,
        });
        console.log("num", num);
      } catch (e) {
        console.error(e);
      }
      if (i == total) {
        setNfts((nfts) => [...nfts, ...arr]);
        setLoading(true);
      }
    }
  };
  console.log("NFTs", nfts);
  return (
    <Router>
      <div className="App2">
        <Navbar
          onLogin={onLogin}
          onLogout={onLogout}
          isConnected={isConnected}
          transfer={transfer}
        />

        <Routes>
          <Route path="/" element={<Main />} />;
          <Route
            path="/explore"
            element={<Explore nfts={nfts} loading={loading} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App2;
