import React, { useState, useEffect } from "react";
import speedTest from "speedtest-net";

const SpeedTest = () => {
  const [ping, setPing] = useState(null);
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);

  useEffect(() => {
    const test = speedTest();
    test.on("data", (data) => {
      setPing(data.ping.toFixed(1) + " ms");
      setDownloadSpeed(data.download.bandwidth.toFixed(2) + " Mbps");
      setUploadSpeed(data.upload.bandwidth.toFixed(2) + " Mbps");
    });

    return () => {
      // Cleanup code if needed
      test.abort();
    };
  }, []);

  return (
    <div>
      <h1>Speed Test Results</h1>
      <div>
        <strong>Ping:</strong> {ping}
      </div>
      <div>
        <strong>Download Speed:</strong> {downloadSpeed}
      </div>
      <div>
        <strong>Upload Speed:</strong> {uploadSpeed}
      </div>
    </div>
  );
};

export default SpeedTest;
