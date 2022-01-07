import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Main from "./components/main/Main";

// import Abi from "./abi.json";
import address from "./address";
import Abi from "./newABI.json";

import Web3 from "web3";
import Header from "./components/header/Header";

let web3, accounts, contract;

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, SetBalance] = useState(0);

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

  // const transfer = async (Address, Amount) => {
  //   contract = new web3.eth.Contract(Abi.output.abi, address.one);
  //   await contract.methods
  //     .transfer(Address, Amount)
  //     .send({ from: currentAccount });
  // };

  // const updateBalance = async (currentAccount) => {
  //   web3 = new Web3(window.ethereum);
  //   contract = new web3.eth.Contract(Abi.output.abi, address.one);
  //   let bal = await contract.methods.balanceOf(currentAccount).call();
  //   SetBalance(() => bal);
  // };

  // useEffect(() => {
  //   const currentAccount = localStorage.getItem("currentAccount");
  //   setCurrentAccount(currentAccount);
  //   if (currentAccount) {
  //     console.log("connected");
  //     updateBalance(currentAccount);
  //     setIsConnected(true);
  //   }

  //   window.ethereum.on("accountsChanged", (accounts) => {
  //     setIsConnected(false);
  //     localStorage.removeItem("currentAccount");
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <Navbar
        onLogin={onLogin}
        onLogout={onLogout}
        isConnected={isConnected}
        transfer={transfer}
      />
      <Header />
      <Main
        currentAccount={currentAccount}
        balance={balance}
        // transfer={transfer}
        isConnected={isConnected}
      /> */}
    </div>
  );
}

export default App;
