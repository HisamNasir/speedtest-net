import React, { useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

export default function SpeedTestPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [speedTestResult, setSpeedTestResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRunSpeedTest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/speedtest");
      setSpeedTestResult(response.data);
    } catch (err) {
      setError(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500"> </h1>
        <Button
          className=" bg-slate-500"
          variant="contained"
          color="primary"
          onClick={handleRunSpeedTest}
          disabled={isLoading}
          startIcon={
            isLoading ? <CircularProgress size={20} color="inherit" /> : null
          }
        >
          {isLoading ? "Running Test..." : "Run Speed Test"}
        </Button>
        {speedTestResult && (
          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Speed Test Results</h2>
            <p className="text-lg mb-2">
              Ping: {speedTestResult.ping.latency} ms
            </p>
            <p className="text-lg mb-2">
              Download Speed:{" "}
              {(speedTestResult.download.bandwidth / 1024 / 1024) * 8} Mbps
            </p>
            <p className="text-lg mb-2">
              Upload Speed:{" "}
              {(speedTestResult.upload.bandwidth / 1024 / 1024) * 8} Mbps
            </p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      </div>
    </div>
  );
}
