import runSpeedTest from "../../lib/speedtestWrapper";

export default async function handler(req, res) {
  try {
    const speedTestResult = await runSpeedTest();
    console.log("Speedtest result:", speedTestResult);
    res.status(200).json(speedTestResult);
  } catch (error) {
    console.error("Error running Speedtest:", error);
    res.status(500).json({ error: error.message });
  }
}
