import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";
export default function List() {
  const location = useLocation();
  const list = location.state.list;
  const { dispatch } = useContext(ListContext);
  const [updatedListTitle, setUpdatedListTitle] = useState();
  const [updatedListGenre, setUpdatedListGenre] = useState();
  const [updatedListType, setUpdatedListType] = useState();
  const [updatedList, setUpdateList] = useState(list);
  const handleUpdate = (e) => {
    e.preventDefault();

    updatedList.title = updatedListTitle;
    updatedList.genre = updatedListGenre;
    updatedList.type = updatedListType;
    updateList(updatedList, dispatch);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create List</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              placeholder={list.title}
              onChange={(e) => setUpdatedListTitle(e.target.value)}
            />

            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              onChange={(e) => setUpdatedListGenre(e.target.value)}
            />

            <label>Type</label>
            <input
              type="text"
              placeholder={list.type}
              onChange={(e) => setUpdatedListType(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
