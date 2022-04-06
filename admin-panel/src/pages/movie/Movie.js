import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
export default function Product() {
  const location = useLocation();
  const movie = location.state.movie;
  const { dispatch } = useContext(MovieContext);
  const [updatedMovieTitle, setUpdateMovieTitle] = useState();
  const [updatedMovieYear, setUpdateMovieYear] = useState();
  const [updatedMovieGenre, setUpdateMovieGenre] = useState();
  const [updatedMovieLimit, setUpdateMovieLimit] = useState();
  const [updatedMovie, setUpdateMovie] = useState(movie);
  const handleUpdate = (e) => {
    e.preventDefault();

    updatedMovie.title = updatedMovieTitle;
    updatedMovie.year = updatedMovieYear;
    updatedMovie.genre = updatedMovieGenre;
    updatedMovie.limit = updatedMovieLimit;
    updateMovie(updatedMovie, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create Movie</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productInfoImg" src={movie.img} alt="" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">age limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie.title}
              onChange={(e) => setUpdateMovieTitle(e.target.value)}
            />

            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              onChange={(e) => setUpdateMovieYear(e.target.value)}
            />

            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              onChange={(e) => setUpdateMovieGenre(e.target.value)}
            />

            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit}
              onChange={(e) => setUpdateMovieLimit(e.target.value)}
            />

            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />

            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
