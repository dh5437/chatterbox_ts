import logo from "../assets/YunChat_logo.png";

const LeftSidebar: React.FC = () => {
  return (
    <nav className="leftSidebar">
      <img src={logo} className="logo"></img>
      <div>Profile</div>
    </nav>
  );
};

export default LeftSidebar;
