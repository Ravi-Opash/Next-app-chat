import { useEffect, useState } from "react";

const subChat = (props) => {
  const [ismatch, setIsMatch] = useState(false);

  let username;
  useEffect(() => {
    setIsMatch(false);
    username = localStorage.getItem("username");
    if (username === props.data.username) {
      setIsMatch(true);
    }
  }, [props.data.username]);

  return (
    <div className={``}>
      <div className={`w-fit rounded m-2 break-all ${ismatch ? "ml-auto bg-indigo-500" : "bg-indigo-300"}`}>
        <span className=" px-5">
          <b>{props.data.username}</b> &nbsp; <span>{props.data.time}</span>
        </span>
        <div className={` px-5 rounded  ${ismatch ? "bg-indigo-300" : "bg-indigo-200"}`}>
          <p>{props.data.msg}</p>
        </div>
      </div>
    </div>
  );
};

export default subChat;
