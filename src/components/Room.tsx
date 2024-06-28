import React from "react";
import { useParams } from "react-router-dom";

const Room: React.FC = () => {
  const { roomname } = useParams();
  return <div>Room: {roomname}</div>;
};

export default Room;
