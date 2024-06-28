import React from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "./App";

interface RoomListProps {
  datas: Data[];
  rooms: Data[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms, datas }) => {
  const navigate = useNavigate();

  return (
    <div className="roomList">
      {rooms.map((data) => (
        <div
          className="room"
          key={data.id}
          onClick={() => {
            const chats = datas
              ? datas.filter(
                  (clickedData: Data) => clickedData.roomname === data.roomname
                )
              : [];
            navigate(`/:${data.roomname}`, { state: { datas, chats } });
          }}
        >
          {data.roomname}
        </div>
      ))}
    </div>
  );
};

export default RoomList;
