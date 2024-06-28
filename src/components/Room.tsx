import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Chat from "./Chat.tsx";
import { Data } from "./App";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Room: React.FC = () => {
  const { roomname } = useParams<{ roomname: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const [text, setText] = useState<string>("");
  const [chats, setChats] = useState<Data[]>(location.state?.chats || []);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const refreshMessage = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      const roomChats = response.data.filter(
        (data: Data) => data.roomname === roomname
      );
      setChats((prevChats) => {
        const existingIds = new Set(prevChats.map((chat) => chat.id));
        const newChats = roomChats.filter(
          (chat: Data) => !existingIds.has(chat.id)
        );
        return [...prevChats, ...newChats];
      });
    } catch (error) {
      console.log("Error refreshing messages", error);
    }
  };

  useEffect(() => {
    refreshMessage();
    const interval = setInterval(refreshMessage, 1000);
    return () => clearInterval(interval);
  }, [roomname]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessages: Data = {
      id: uuidv4(),
      username: "sliverstone",
      roomname: roomname!,
      text: text,
      date: new Date().toISOString(),
    };

    try {
      await axios.post("https://www.yungooso.com/api/messages", newMessages);
      setText("");
    } catch (error) {
      console.log("Error sending messages", error);
    }
  };

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
          <div ref={chatEndRef} />
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
