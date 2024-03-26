import React, { useState } from "react";
import axios from "axios";

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
      <h1>Speed Test</h1>
      <button onClick={handleRunSpeedTest} disabled={isLoading}>
        {isLoading ? "Running Test..." : "Run Speed Test"}
      </button>
      {speedTestResult && (
        <div>
          <h2>Speed Test Results</h2>
          <p>Ping: {speedTestResult.ping} ms</p>
          <p>Download Speed: {speedTestResult.download} Mbps</p>
          <p>Upload Speed: {speedTestResult.upload} Mbps</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
