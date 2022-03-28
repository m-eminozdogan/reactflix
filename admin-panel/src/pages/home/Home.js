import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../fakeData";
import WidgetSmall from "../../components/widgets/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgets/widgetLarge/WidgetLarge";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "bryr eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2NhNzFjMDdmZDhkMzdiOWM4NDQ2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODQ5NDA3MywiZXhwIjoxNjQ4NzUzMjczfQ.IJn4Rio2bLAlMCIf8xLku5p_z9is49RwqV37qyJO5E4",
          },
        });
        // sorting months cuz we dont want mixed months in chart
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
