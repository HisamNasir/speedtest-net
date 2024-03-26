import { useState } from "react";

export default function Home() {
  const [speedTestResult, setSpeedTestResult] = useState(null);

  const runSpeedTest = async () => {
    try {
      const response = await fetch("/api/speedtest");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Speedtest data:", data);
      setSpeedTestResult(data);
    } catch (error) {
      console.error("Error fetching speed test data:", error);
    }
  };

  return (
    <div>
      <h1>Speedtest Results</h1>
      <button onClick={runSpeedTest}>Run Speedtest</button>
      {speedTestResult && (
        <div>
          <h2>Ping: {speedTestResult.ping} ms</h2>
          <h2>
            Download Speed: {speedTestResult.download.bandwidth / 1024 / 1024}{" "}
            Mbps
          </h2>
          <h2>
            Upload Speed: {speedTestResult.upload.bandwidth / 1024 / 1024} Mbps
          </h2>
        </div>
      )}
    </div>
  );
}
