import "./userList.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
export default function UserList() {
  const { users, dispatch } = useContext(UserContext);
  // const [data, setData] = useState(null);
  useEffect(() => {
    getUsers(dispatch);
    //setData(users);
  }, [dispatch]);

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "E-mail", width: 170 },
    {
      field: "isAdmin",
      headerName: "Admin",
      type: "string",
      width: 150,
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction",
    //   width: 150,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      {users && (
        <DataGrid
          disableSelectionOnClick
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(r) => r._id}
          checkboxSelection
        />
      )}
    </div>
  );
}
