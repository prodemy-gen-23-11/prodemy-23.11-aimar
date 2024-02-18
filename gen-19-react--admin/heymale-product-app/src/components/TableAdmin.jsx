import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import axios from "axios";
import React from "react";
import useSWR from "swr";

function TableAdmin() {
  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:3000/parfums",
    fetcher
  );

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => (
        <div className="text-center">
          <p>{info.getValue()}</p>
        </div>
      ),
      header: "ID",
    }),
    columnHelper.accessor("preview", {
      cell: (info) => (
        <img className="rounded-lg w-20 h-20" src={info.getValue()} />
      ),
      header: "Image",
    }),
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("price", {
      header: "Price",
    }),
    columnHelper.accessor("sold", {
      header: "Sold",
    }),
    ,
    columnHelper.accessor("", {
      header: "Option",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!isLoading)
    return (
      <div className="mx-auto">
        <table className="border border-gray-800 w-full text-left">
          <thead className="bg-gray-600 text-zinc-50 text-center">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 border-x border-b border-gray-800"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length
              ? table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`
                                            ${i % 2 === 0 ? "" : "bg-gray-400"}
                                        `}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-2 border-x border-gray-800"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                        {console.log(cell)}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
}

export default TableAdmin;
