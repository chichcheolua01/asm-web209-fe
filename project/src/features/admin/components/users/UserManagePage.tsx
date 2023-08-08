import React from "react";
import { useGetUsersQuery } from "../../../user/user.services";
import { Link } from "react-router-dom";

const UserManagePage = () => {
  const { isError, isLoading, data } = useGetUsersQuery()

  if (isLoading) {
    return <>Loading...</>
  }
  if (isError) {
    return <p>ERROR</p>
  }

  return (
    <>
      <h1 className="font-Poppins text-2xl mb-7">User Manage Page</h1>
      <div className="">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Tên</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.users.map((user, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td className="px-6 py-3">
                    {user.name}
                  </td>
                  <td className="px-6 py-3">
                    {user.email}
                  </td>
                  <td className="px-6 py-3">
                    Role
                  </td>
                  <td className="px-6 py-3">
                    <Link to={`update/${user.id}`}><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div></>
  )

};

export default UserManagePage;
