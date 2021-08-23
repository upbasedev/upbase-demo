import axios from "axios";

export default async (req, res) => {
    try {
        let bearer = `Bearer ${req.body.jwt}`;
        let response = await axios.post('https://api-dev.upbase.dev/manage_subscription', {
            return_url: req.body.return_url
          }, {
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
