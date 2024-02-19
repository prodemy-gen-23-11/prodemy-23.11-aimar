import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

function TableAdmin() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/admin/addNew`);
  };
  const fetcher = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR("http://localhost:3000/parfums", fetcher);

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
    columnHelper.accessor("image", {
      cell: (info) => {
        return (
          <img
            className="w-20 h-20 rounded-lg"
            src={info.row.original.image[3]}
          />
        );
      },
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
      <div className="m-auto">
        <div className="flex justify-center">
          <p className="text-2xl font-extrabold text-gray-800">
            HEYMALE Admin Page
          </p>
        </div>
        <div>
          <button
            onClick={redirect}
            className="block px-6 py-2 mx-auto my-4 text-white bg-gray-800 rounded-full cursor-pointer focus:outline-none focus:shadow-outline"
          >
            Add New
          </button>
        </div>
        <table className="w-full border border-gray-800">
          <thead className="text-center bg-gray-600 text-zinc-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 border-b border-gray-800 border-x"
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
                        className="px-2 border-gray-800 border-x"
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
