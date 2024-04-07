"use client";

import { SortIcon } from "@/svgs";
import { usePathname, useRouter } from "next/navigation";
import {
  useGetAllApplicationsQuery,
  useGetAllDraftsQuery,
} from "@/store/api/applicationApi";
import { time } from "@/utils/time&dates";
import { cutString } from "@/utils/helpers";
import TableSkeleton from "@/components/skeleton-loaders/TableSkeleton";
import { useEffect } from "react";

const tableColumn = [
  "Ref No",
  "Applicant Name",
  "Payment Status",
  "Application Name",
  "Status",
  "Date Applied",
];

const Table = () => {
  const router = useRouter();

  const { isLoading, isSuccess, isError, error, data } =
    useGetAllDraftsQuery();

  const drafts = data?.data.application;
//   console.log(data);

//   const openApplicationDetails = (applicationId, applicationStatus) => {
//     {
//       router.push(
//         `/user/applications/${applicationId}?status=${applicationStatus}&id=${applicationId}`
//       );
//     }
//   };

  // const openApplicationDrafts = (formId, userId, data) => {
  //   window.localStorage.setItem(userId, JSON.stringify(data));
  //   {
  //     router.push(`/user/new-application/?form_id=${formId}&user_id=${userId}`);
  //   }
  // };

  if (isLoading) return <TableSkeleton />;

  return drafts?.length > 0 ? (
    <div className="relative overflow-x-auto lg:overflow-x-hidden shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-gray-500 uppercas bg-gray-50">
          <tr className="whitespace-nowrap">
            {tableColumn.map((column) => (
              <th key={column} scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  {column}
                  <a href="#">{SortIcon}</a>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {drafts?.map((application) => (
            <tr
            //   onClick={() =>
            //     openApplicationDetails(application.id, application.status)
            //   }
              key={application.id}
              className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full text-sm cursor-pointer hover:opacity-70"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {cutString(application.reference_id, 10)}
              </th>
              <td className="px-6 py-4 w-80">
                {application?.user?.first_name +
                  " " +
                  application?.user?.last_name}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`py-1.5 rounded-3xl ${
                    application?.transactions?.length === 0
                      ? "bg-red-100 text-red-600 px-3"
                      : "bg-green-100 text-green-700 px-6"
                  } `}
                >
                  {application?.transactions?.length === 0 ? "Unpaid" : "Paid"}
                </span>
              </td>
              <td className="px-6 py-4 w-80">{application?.form?.name}</td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1.5 text-sm bg-gray-200 rounded-3xl py-1 px-3`}>Draft</span>
              </td>
              <td className="px-6 py-4 space-y-1 flex flex-col items-end ">
                <p className="">{time.formatDate(application?.updated_at)}</p>
                <p className="">{time.formatTime(application?.updated_at)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex items-center justify-center bg-white rounded-[4px] ">
      <h1>
        You currently dont have an application, create an application to get
        started
      </h1>
    </div>
  );
};

export default Table;