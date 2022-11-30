import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesByStatus } from "../redux/articleSlice";
import moment from "moment";
import "moment/locale/vi";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "./styles/statusArticle.module.scss";
import { StoreContext } from "../utils/store";

const StatusArticle = () => {
  const value = React.useContext(StoreContext);
  const openPreview = value.preview[1];
  let dispatch = useDispatch();
  const articles = useSelector((state) => state.article.listStatus);
  React.useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticlesByStatus());
    }
  }, [articles.length, dispatch]);

  const gridRef = React.useRef();

  var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var value = moment(cellValue).format("DD/MM/YYYY");
      var dateAsString = value;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("/");
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
    minValidYear: 2000,
    maxValidYear: moment().year(),
    inRangeFloatingFilterDateFormat: "DD MMM YYYY",
  };

  const dateFormatter = (params) => {
    return (
      moment(params.value).fromNow() +
      " (" +
      moment(params.value).format("DD/MM/YYYY") +
      ")"
    );
  };

  const StatusRenderer = (props) => {
    let data = props.data;
    return <button className={styles.status}>{`${data.status}`}</button>;
  };

  const [columnDefs] = React.useState([
    { field: "title" },
    { field: "category.title", headerName: "Category" },
    { field: "writer.fullname", headerName: "Writer" },
    {
      field: "created_at",
      headerName: "Date",
      valueFormatter: dateFormatter,
      filter: "agDateColumnFilter",
      filterParams: filterParams,
    },
    {
      field: "status",
      cellRenderer: StatusRenderer,
    },
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      buttons: ["reset"],
    },
  };

  const onGridReady = React.useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onRowClicked = (props) => {
    let data = props.data;
    openPreview(data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className="ag-theme-alpine" style={{ height: "500px" }}>
          <AgGridReact
            ref={gridRef}
            defaultColDef={defaultColDef}
            rowData={articles}
            columnDefs={columnDefs}
            suppressDragLeaveHidesColumns={true}
            onGridReady={onGridReady}
            onRowClicked={onRowClicked}
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};
export default StatusArticle;
