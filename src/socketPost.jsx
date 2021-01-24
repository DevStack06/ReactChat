import React, { useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
function PostRestData() {
  //   window.preventDefault();
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
  });
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    // console.log(msg);
    setMsg(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const socketSend = () => {
    socket.emit("messageChange", { msg: msg });
    setMsg("");
  };
  return (
    <div class="container p-4">
      <p class="h3 pb-5 text-primary"> Message Page</p>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="mesage">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onChange}
            value={msg}
          ></textarea>
        </div>

        <button class="btn btn-warning m-5" onClick={socketSend}>
          Chat Websocket
        </button>
      </form>
    </div>
  );
}

export default PostRestData;
