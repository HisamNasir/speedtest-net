// pages/api/speedtest.js

import speedTest from "speedtest-net";

export default async function handler(req, res) {
  try {
    const test = speedTest({ maxTime: 5000 }); // Adjust maxTime as needed
    test.on("data", (data) => {
      res
        .status(200)
        .json({
          downloadSpeed: data.speeds.download,
          uploadSpeed: data.speeds.upload,
        });
    });
    test.on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
