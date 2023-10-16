import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <TranslateIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
