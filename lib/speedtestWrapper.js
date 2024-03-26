import { exec } from "child_process";

export default function runSpeedTest() {
  return new Promise((resolve, reject) => {
    exec("speedtest --json", (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing Speedtest command:", error);
        reject(error);
        return;
      }
      if (stderr) {
        console.error("Error executing Speedtest command:", stderr);
        reject(new Error(stderr));
        return;
      }
      try {
        const data = JSON.parse(stdout);
        resolve(data);
      } catch (parseError) {
        console.error("Error parsing Speedtest output:", parseError);
        reject(parseError);
      }
    });
  });
}
