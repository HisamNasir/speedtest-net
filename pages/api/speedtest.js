import { exec } from "../../utils/speedTestUtil";

export default async function handler(req, res) {
  try {
    const result = await exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
