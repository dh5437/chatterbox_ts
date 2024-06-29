import { useEffect, useState } from "react";
import "../styles/style.scss";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "./LeftSidebar.tsx";
import Nav from "./Nav";
import axios from "axios";
import RoomList from "./RoomList.tsx";

export interface Data {
  id: string;
  username: string;
  roomname: any;
  text: string;
  date: string;
}

const App: React.FC = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState<Array<Data>>([]);
  const [query, setQuery] = useState<string>("");

  const getMessages = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      setDatas(response.data);
    } catch (error) {
      console.log("Error while getting messages", error);
    }
  };

  useEffect(() => {
    getMessages();
    const interval = setInterval(getMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  const rooms: Data[] = datas.slice().reduce((acc: Data[], current: Data) => {
    const madeRoom = acc.find((room) => room.roomname === current.roomname);
    if (!madeRoom) {
      acc.push(current);
    }
    return acc;
  }, []);

  const filteredRooms: Data[] = rooms.filter((room) =>
    room.roomname.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <LeftSidebar />
      <div className="wrapper">
        <Nav
          getQuery={handleQueryChange}
          query={query}
          onSearch={handleSearch}
        />
        <button onClick={() => navigate("/practice")}>Go to Practice</button>
        <RoomList datas={datas} rooms={filteredRooms}></RoomList>
      </div>
    </>
  );
};

export default App;
