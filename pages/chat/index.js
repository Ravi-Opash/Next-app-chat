import Chat from "../../Components/chat";
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Message from "../../model/Message";

function ChatPage(props) {
  const router = useRouter();

  async function addMsgHandler(enteredMsg) {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify(enteredMsg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/chat");
  }

  return (
    <Fragment>
      <Head>
        <title>React NextJS App</title>
        <meta
          name="description"
          content="This is my first app with tailwind and NextJS"
        />
      </Head>
      <Chat onAddMsgup={addMsgHandler} messages={props.message} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
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

  let messages;

  try {
    messages = await Message.find();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      message: messages.map((message) => ({
        username: message.username,
        time: message.time,
        msg: message.msg,
      })),
    },
    revalidate: 1,
  };
}

export default ChatPage;
