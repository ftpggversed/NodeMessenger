const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/', 
        {username: username, secret: username, first_name: username},
        { headers: {"private-key": "33a18830-91da-413b-8e18-56e339b22676"}}
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    console.error(error)
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);