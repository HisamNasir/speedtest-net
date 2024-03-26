const exec = require("speedtest-net");
let lastRequestTime = 0;
const requestInterval = 1000; // limit implemented and waited for while before make it capable of running
async function performSpeedTest() {
  const currentTime = Date.now();
  const elapsedTimeSinceLastRequest = currentTime - lastRequestTime;
  if (elapsedTimeSinceLastRequest < requestInterval) {
    await new Promise((resolve) =>
      setTimeout(resolve, requestInterval - elapsedTimeSinceLastRequest)
    );
  }
  try {
    const result = await exec();
    lastRequestTime = Date.now();
    return result;
  } catch (error) {
    console.error("Error in test:", error);
    throw new Error("Speed test failed");
  }
}

module.exports = { exec: performSpeedTest };
