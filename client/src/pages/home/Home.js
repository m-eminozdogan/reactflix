import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "&type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "bariyer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2NhNzFjMDdmZDhkMzdiOWM4NDQ2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODM3NzcxMSwiZXhwIjoxNjQ4NjM2OTExfQ.iYx4nrjnMqwI9eySWTroi10YbiauopQYbM2n382IhRY",
            },
          }
        );
        //console.log(res.data);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists && lists.map((list, i) => <List key={i} list={list} />)}
    </div>
  );
};

export default Home;
