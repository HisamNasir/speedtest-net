import { exec } from "../../utils/speedTestUtil";

export default async function handler(req, res) {
  try {
    const result = await exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// with api
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get('https://example.com/speedtest');
//     const speedTestResult = response.data;
//     res.status(200).json(speedTestResult);
//   } catch (error) {
//     console.error('Error in speed test:', error);
//     res.status(500).json({ error: 'Speed test failed' });
//   }
// }
