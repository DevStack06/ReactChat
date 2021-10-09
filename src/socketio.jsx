import React from "react";
import "./useful.css";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
const RecieveData = () => {
  let [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    getData();
  });
  const getData = () => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    socket.on("receive", (msg, callback) => {
      //   console.log(`Lgdata --->> ${msg.msg}`);
      //   chats = [...chats, msg.msg];
      setChats([...chats, msg.msg]);
      //   console.log(`Lgdata --->> ${msg.msg}`);
    });
  };

  const data = chats.map((i, index) => {
    return <div className="chat">{i}</div>;
  });
  console.log(chats);
  return (
    <div className="main">
      <div>
        {" "}
        <p className="h1 text-primary">Messages Will come here</p>
      </div>
      <div className="p-5 data">{data}</div>
    </div>
  );
};

export default RecieveData;
