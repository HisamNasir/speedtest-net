import Head from "next/head";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { FaSpinner } from "react-icons/fa";
import { Button } from "@mui/material";

const imageAddr = "/imagetest.jpg";
const downloadSize = 21403601;

const numberStyle = { fontVariantNumeric: "lining-nums" };

const initialResult = {
  mbs: "0",
  kbps: "0",
  bps: "0",
};

const Home = () => {
  const [result, setResult] = useState(initialResult);
  const [running, setRunning] = useState(false);

  const runSpeedTest = async () => {
    setRunning(true);
    setResult(initialResult);
    let startTime = 0;
    let endTime = 0;
    const download = new Image();
    download.onload = function () {
      endTime = new Date().getTime();
      showResults();
    };

    download.onerror = function (err, msg) {
      console.error(err);
      console.log(msg);
      setRunning(false);
    };

    startTime = new Date().getTime();
    const cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
      const duration = (endTime - startTime) / 1000;
      const bitsLoaded = downloadSize * 8;
      const speedBps = (bitsLoaded / duration).toFixed(2);
      const speedKbps = (parseInt(speedBps) / 1024).toFixed(2);
      const speedMbps = (parseInt(speedKbps) / 1024).toFixed(2);

      setResult({
        mbs: speedMbps,
        kbps: speedKbps,
      });
      setRunning(false);
    }
  };

  const counter = (value, type) => (
    <div
      className="flex items-center mb-2"
      style={{ height: running ? "45px" : undefined }}
    >
      <h2 style={numberStyle}>
        {running ? (
          <sup className="animate-spin flex justify-center items-center">
            <CircularProgress size={20} />
          </sup>
        ) : (
          value
        )}
      </h2>{" "}
      <sup className="ml-1">{type}</sup>
    </div>
  );

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h5 className="text-lg font-bold mb-2">Your download speed:</h5>
            <div>
              <h1 className="text-2xl font-bold mb-1">Download (Mbps)</h1>
              <div className=" font-bold flex justify-center text-blue-500">
                {counter(result.mbs, "Mbps")}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Download (Kbps)</h1>
              <div className=" font-bold flex justify-center text-blue-500">
                {counter(result.kbps, "Kbps")}
              </div>
            </div>
            <Button variant="contained" onClick={runSpeedTest}>
              Run Speedtest
            </Button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
