import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/123" style={{ textDecoration: "none" }}>
              <div className="view">View</div>
            </Link>

            <div className="delete">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="addTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className="add">
          Add 
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
