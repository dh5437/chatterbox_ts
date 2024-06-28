import React from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "./App";

interface RoomListProps {
  datas: Data[];
  rooms: Data[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  const navigate = useNavigate();

  return (
    <div className="roomList">
      {rooms.map((data) => (
        <div
          className="room"
          onClick={() => {
            navigate(`/:${data.roomname}`);
          }}
        >
          {data.roomname}
        </div>
      ))}
    </div>
  );
};

export default RoomList;
