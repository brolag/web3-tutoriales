
import Image from "next/image";
import { useState, useEffect } from "react";
import connect from "../challenges/connect";
import Confetti from 'react-confetti';
import styles from './connectWallet.module.css';
import { classicNameResolver } from "typescript";

export default function connectWallet() {

  const [balance, setBalance] = useState();
  const [error, setError] = useState();

  const [walletAccount, setWalletAccount] = useState("");
  const checkIfMetaMaskIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Check if Metamask is installed.");
      } else {
        console.log("Connected ", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      console.log(accounts);
      if (accounts.length != 0) {
        console.log("Found account: ", accounts[0]);
        setWalletAccount(accounts[0]);
      } else {
        console.log("No authorized account");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getConnection = async () => {
    const { error, address } = await connect();
    if (error) {
      console.log(error);
      setError(error);
    } else {
      setWalletAccount(address);

    }
  }
  const disconectWallet = async () => {
    setWalletAccount(null);
  };



  return (
    <div>

      <main>
        <section className={styles.container}>
          <div className={styles.left}>
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.
            Lo primero que tenemos que hacer es configurar la wallet.



          </div>
          <div className={styles.right}>
            {walletAccount && (
              <div>
                {" "}
              Address: <code>{walletAccount}</code>

              <Confetti numberOfPieces={500} tweenDuration={1001} gravity={0.05} />
              </div>
            )}

            <div>
              {!walletAccount ? (
                <button onClick={getConnection}>
                  Verifica conexión con Metamask
                </button>
              ) : (
                  <button onClick={disconectWallet}>
                    Desconectarse
                  </button>
                )}
            </div>

            {error && (
              <div className={styles.error}> 
                  error
              </div>
              
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
