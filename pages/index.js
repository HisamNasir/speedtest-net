import Head from "next/head";
import React, { useState } from "react";

import SpeedTestPage from "./speedtest";

const initialResult = {
  mbs: "0",
  kbps: "0",
  bps: "0",
};

const Home = () => {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <SpeedTestPage />
      </div>
    </div>
  );
};

export default Home;
