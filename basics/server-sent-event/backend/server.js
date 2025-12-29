import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());

app.get("/api/event", (req, res) => {
  try {
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");
    res.header("Connection", "keep-alive");

    let count = 0;

    const interval = setInterval(() => {
      count++;
      console.log(count);
      res.write(`data: Message ${count}`);
      if (count === 5) {
        clearInterval(interval);
        res.end();
      }
    }, 2000);

    req.on("close", () => {
      clearInterval(interval);
      console.log("Client disconnected");
    });
  } catch (error) {
    console.log("Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
