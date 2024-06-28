import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Chat from "./chat";
import { Data } from "./App";

const Room: React.FC = () => {
  const { roomname } = useParams<{ roomname: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  let datas = location.state.datas;

  const [text, setText] = useState<string>("");
  const [chats, setChats] = useState<Data[]>(
    datas ? datas.filter((data: Data) => data.roomname === roomname) : []
  );

  const handleSubmit = () => {};

  return (
    <div className="chatContainer">
      <div className="roomNav">
        <span
          className="material-symbols-outlined"
          onClick={() => {
            navigate("/");
          }}
        >
          arrow_back
        </span>
        Room: {roomname}
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className="chatList">
        <div>
          {chats.map((chat: Data) => (
            <Chat key={chat.id} data={chat} />
          ))}
          {/* <div ref={chatEndRef} /> */}
        </div>
      </div>
      <div className="sendForm">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="MESSAGE"
          ></input>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Room;
