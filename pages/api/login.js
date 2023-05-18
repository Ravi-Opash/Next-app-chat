import mongoose from "mongoose";
import User from "../../model/User";

// import { Server } from "socket.io";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const MONGODB_URI =
      "mongodb+srv://Ravi1411:Ravi1411@nodejs.19qxclq.mongodb.net/ChatApp?retryWrites=true&w=majority";

    mongoose
      .connect(MONGODB_URI)
      .then((result) => {
        console.log("connected...");
      })
      .catch((err) => {
        console.log(err);
      });

    try {
      const msg = await User.find({ username: data.username });

      console.log(msg[0].password, data.password);
      if (!msg.length) {
        res.send("no user found");
      } else if (msg[0].password !== data.password) {
        console.log("no match");
        res.send("wrong password");
      } else {
        // const io = new Server(res.socket.server)
        // res.socket.server.io = io;
        // console.log(res.socket.server);
        res.json({
          message: "User successfully logged In...!",
          username: data.username,
        });
      }
    } catch (err) {
      res.send(err);
    }
  }
}

export default handler;
