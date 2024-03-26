const exec = require("speedtest-net");
async function performSpeedTest() {
  try {
    const result = await exec();
    return result;
  } catch (error) {
    console.error("Error in test:", error);
    return null;
  }
}
module.exports = { exec: performSpeedTest };
