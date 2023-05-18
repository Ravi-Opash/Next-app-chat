import { useEffect, useState } from "react";
import Header from "./Header/header";
import Subchat from "./Subchat";
// import io from "socket.io-client";
// let socket;

const Chat = (props) => {
  const [msg, setMsg] = useState(null);

  let username;

  useEffect(() => {
    // socketInitializer();
    username = localStorage.getItem("username");
    console.log(username);
  }, []);

  // const socketInitializer = async () => {
  //   const response = await fetch("/api/socket");

  //   const data = await response;
  //   console.log(data, 'responce data');

  //   socket = io()

  //   socket.on("connect", () => {
  //     console.log("connected socket");
  //   });

  //   socket.on('update-input', (data)=>{
  //     setMsg([...props.messages, data])
  //   })
  // };

  const onMsgSend = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    setMsg(event.target[0].value);

    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()

    const data = {
      username: username,
      time: hour.toString() + ' : ' + min.toString(),
      msg: event.target[0].value,
    };

    // socket.emit('input-change', data)

    props.onAddMsgup(data);
  };

  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col justify-end w-full h-screen pt-40 bg-cyan-100 overflow-y-auto">
        {props.messages.map((msg, idx) => (
          <Subchat data={msg} key={idx} />
        ))}

        <div>
          <form className="flex" method="POST" onSubmit={onMsgSend}>
            <textarea
              id="textarea"
              className="w-10/12 h-12 text-2xl bg-sky-500 border-2 border-black rounded"
              rows="1"
              placeholder="Write a message..."
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white flex justify-center cursor-pointer items-center w-2/12 font-bold mr-2 px-4 border-2 border-blue-700 rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
