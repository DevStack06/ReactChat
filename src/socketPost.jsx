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
    <div className="container p-4">
      <p className="h3 pb-5 text-primary"> Message Page</p>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="mesage">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onChange}
            value={msg}
          ></textarea>
        </div>

        <button className="btn btn-warning m-5" onClick={socketSend}>
          Send
        </button>
      </form>
    </div>
  );
}

export default PostRestData;
