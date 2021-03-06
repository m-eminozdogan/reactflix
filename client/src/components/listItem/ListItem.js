import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "bariyer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2NhNzFjMDdmZDhkMzdiOWM4NDQ2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU4NTkxMSwiZXhwIjoxNjQ5ODQ1MTExfQ.kQRg1Q2no7YuOMKTEIFE8gDLQPtci_ijc-Ko7COXX00",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <>
      {movie && (
        <Link to="/watch" state={{ movie }}>
          <div
            className="listItem"
            style={{ left: isHovered && index * 225 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={movie.img} alt="" />
            {isHovered && (
              <>
                <video src={movie.trailer} autoPlay={true} loop />

                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownAltOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                  </div>
                  <div className="desc">{movie.desc}</div>
                  <div className="genre">{movie.genre}</div>
                </div>
              </>
            )}
          </div>
        </Link>
      )}
    </>
  );
}
