import React from "react";
import { Data } from "./App";

interface ChatProps {
  key: string;
  data: Data;
}

const Chat: React.FC<ChatProps> = ({ data }) => {
  return (
    <div
      className="oppositeChat"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div className="chatUser">{data.username}</div>
      <div className="chatMessage">{data.text}</div>
    </div>
  );
};

export default Chat;
