import axios from "axios";

export default async (req, res) => {
    let bearer = `Bearer ${req.body.jwt}`;
    try {
        let response = await axios.post('https://api-dev.upbase.dev/subscribe_tenant', {
            stripe_price_id: "price_1JHzvCKSkowr7yEvf7fznUGd",
            success_url: "https://demo.upbase.com/main",
            cancel_url: "https://demo.upbase.com/main"
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
