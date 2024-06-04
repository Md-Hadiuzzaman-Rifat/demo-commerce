/* eslint-disable no-unused-vars */
// Original Thread: https://github.com/TanStack/table/discussions/2453

import React, { useMemo } from "react";
import { useGetAllOrderedQuery } from "../../features/confirmOrder/confirmOrder";
import AdminLayout from "../AdminLayout/AdminLayout";

import TableContainer from "./TableContainer";
import {
  DateRangeColumnFilter,
  dateBetweenFilterFn
} from "./filters";


const Overview = () => {

    const { data, isLoading, isError } = useGetAllOrderedQuery();

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Filter: DateRangeColumnFilter,
        filter: dateBetweenFilterFn
      }
    ],
    []
  );

  return(
    <AdminLayout>
        {
            !isLoading && data && <TableContainer columns={columns} data={data} />
        }
    </AdminLayout>
  );
};

export default Overview;
