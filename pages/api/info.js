import axios from "axios";

export default async (req, res) => {
    try {
        let bearer = `Bearer ${req.body.jwt}`;
        let response = await axios.get('https://api-dev.upbase.dev/userinfo', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": bearer
            }
          });
          res.status(200).json({ data: response.data })
    } catch (e) {
      res.status(400).json({ error: e})
    }
}
