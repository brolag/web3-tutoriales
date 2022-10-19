import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ethers } from "ethers";
import connectWallet from "./components/connectWallet";

export default function Ethereum() {
    return connectWallet();
}