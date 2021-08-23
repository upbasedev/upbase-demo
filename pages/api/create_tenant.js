import axios from "axios";

export default async (req, res) => {
    let bearer = `Bearer ${process.env.API_KEY}`;
    try {
        let response = await axios.post('https://api-dev.upbase.dev/create_tenant', {
            stripe_price_id: "price_1JHzvCKSkowr7yEvf7fznUGd",
            success_url: "https://demo.upbase.com/main",
            cancel_url: "https://demo.upbase.com"
          }, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": bearer
            }
          });
        let tenant = response.data.tenant;
        let response2 = await axios.post('https://api-dev.upbase.dev/create_user', {
            tenant: tenant,
            application_name: "upbase.com",
          }, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": bearer
            }
          });
          res.status(200).json({ data: response2.data })
    } catch (e) {
      res.status(400).json({ error: e})
    }
}
