import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };

app.get("/api/employees", (req, res) => {
    const data = { results: [sampleEmployee] };
  res.json(data);
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});