/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination
} from "react-table";
import { Filter, DefaultColumnFilter } from "./filters";

const TableContainer = ({ columns, data, renderRowSubComponent }) => {
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,

  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );


  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };
  return (
    <Fragment>
      <table className="table table-hover" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {/* // find data from here  */}
                  {/* {
                    console.log(column)
                  } */}
                  
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </div>
                  <Filter column={column} />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                {/* {
                  console.log(row?.original)
                } */}
                
                <tr>
                  {row.cells.map((cell) => {
                    
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent(row)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>

      <div
        className="row"
        style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}
      >
      </div>
    </Fragment>
  );
};

export default TableContainer;
