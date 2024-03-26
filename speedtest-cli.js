const speedTest = require("speedtest-net");
console.log("Running speed test...");
speedTest({ acceptLicense: true, acceptGdpr: true })
  .then((data) => {
    console.log("Speed Test Results:");
    console.log(`Ping: ${data.ping.latency} ms`);
    console.log(
      `Download Speed: ${(data.download.bandwidth / 1024 / 1024) * 8} Mbps`
    );
    console.log(
      `Upload Speed: ${(data.upload.bandwidth / 1024 / 1024) * 8} Mbps`
    );
  })
  .catch((err) => {
    console.error("Speed test failed:", err);
  });
