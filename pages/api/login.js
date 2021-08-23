import axios from "axios";

export default async (req, res) => {
    try {
        let response = await axios.post('https://api-dev.upbase.dev/login', {
            username: req.body.username,
            totp: req.body.code    
          }, {
            headers: {
              "Content-Type": "application/json",
            }
          });
          res.status(200).json({ data: response.data })
    } catch (e) {
      res.status(400).json({ error: e})
    }
}
