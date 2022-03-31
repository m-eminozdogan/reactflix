import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
  const handleLogout = () => {
    localStorage.setItem("user", null);
    document.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">M.EMINOZDOGAN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            onClick={() => handleLogout()}
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
