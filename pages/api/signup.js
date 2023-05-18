import mongoose from "mongoose";
import User from "../../model/User";


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
        const find = await User.find({username: data.username})
        if(find.length !== 0){
          res.json({error: 'user already signed in with this username.... try diffrent username'})
        }else{
          const msg = new User(data);
          await msg.save()
          res.status(201).json({ message: 'User successfully signed In...!' });
        }

      }catch(err){
        res.send(err)
      }

  }
}

export default handler;
