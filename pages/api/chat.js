import mongoose from "mongoose";
import Message from "../../model/Message";


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

      try{
        const msg = new Message(data);
        await msg.save()
        res.status(201).json({ message: 'message inserted!' });
      }catch(err){
        res.send(err)
      }

  }
}

export default handler;
