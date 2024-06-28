import { useState } from "react";
import "../styles/style.scss";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "./leftSidebar";
import Nav from "./Nav";

const App: React.FC = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
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
      </div>
    </>
  );
};

export default App;
