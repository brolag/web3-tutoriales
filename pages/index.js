import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { ethers } from "ethers";
import eth from "../components/chain-protocol/eth";

export default function Home() {
  return eth()
}
