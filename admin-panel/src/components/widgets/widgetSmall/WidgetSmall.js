import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./widgetSmall.css";

export default function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        {newUsers.map((user, i) => (
          <li key={i} className="widgetSmallListItem">
            <img
              src={
                user.profilePic ||
                "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              alt=""
              className="widgetSmallImg"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{user.username}</span>
              {/* <span className="widgetSmallUserTitle">Senior Web Dev</span> // NO MORE NEEDED*/}
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
