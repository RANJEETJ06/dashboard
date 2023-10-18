import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "comapnyName", headerName: "Company name", width: 130 },
    {
      field: "opening",
      headerName: "Opening",
      type: "number",
      width: 90,
    },
    {
      field: "closing",
      headerName: "Closing",
      type: "number",
      width: 90,
    },
    {
      field: "change",
      headerName: "Changes",
      width: 90,
      renderCell: (params) => {
        const opening = params.row.opening;
        const closing = params.row.closing;
        const change = ((closing - opening) / opening) * 100;
        let color = 'gray';
        if(change>0){
          color='green';
        }else if(change<0){
          color='red';
        }
        return <div style={{ color }}>{change.toFixed(2)}%</div>;
      },
    },
  ];
  const rows = [
    { id: 1, comapnyName: "Snow", opening: 2000, closing: 1900 },
    { id: 2, comapnyName: "Lannister", opening: 700, closing: 725 },
    { id: 3, comapnyName: "Lannister", opening: 200, closing: 212 },
    { id: 4, comapnyName: "Stark", opening: 17, closing: 16 },
    { id: 5, comapnyName: "Targaryen", opening: 425, closing: 420 },
    { id: 6, comapnyName: "Melisandre", opening: 333, closing: 330 },
    { id: 7, comapnyName: "Clifford", opening: 2000, closing: 2000 },
    { id: 8, comapnyName: "Frances", opening: 213, closing: 236 },
    { id: 9, comapnyName: "Roxie", opening: 6550, closing: 6500 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="table">
      <DataGrid
        className="table"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
      />
    </div>
  );
};

export default Table;
