import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Table = () => {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { jobData } = handleState;

  const { handleDelete, handleEdit, renderLoading, handleDetailsClick, shorten, formatIDR } = handleFunction;

  return (
    <div>
      <div className="text-center">{renderLoading()}</div>
      <div className="overflow-x-auto m-5 rounded-md">
        <table className="table table-sm shadow-md">
          {/* head */}
          <thead className="bg-white text-black">
            <tr>
              <th></th>
              <th className="text-center">Status</th>
              <th>Name</th>
              <th>Role</th>
              <th>Type</th>
              <th>Jobdesc</th>
              <th>Qualification</th>
              <th>Salary</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobData.length !== 0 &&
              jobData.map((res, index) => {
                return (
                  <>
                    <tr key={res.id}>
                      <th>{index + 1}</th>
                      <td className="text-center">{res.jobStatus > 0 ? <p className="bg-success font-bold text-white px-1 rounded-md">Available</p> : <p className="bg-danger font-bold text-white px-1 rounded-md">Closed</p>}</td>
                      <td onClick={() => handleDetailsClick(res.id)} className="hover:cursor-pointer">
                        {res.companyName}
                      </td>
                      <td>{res.title}</td>
                      <td>
                        {res.jobTenure}
                        <br />({res.jobType})
                      </td>
                      <td>{shorten(res.jobDescription, 5)}</td>
                      <td>{shorten(res.jobQualification, 5)}</td>
                      <td>
                        {formatIDR(res.salaryMin)} - {formatIDR(res.salaryMax)}
                      </td>
                      <td className="text-center">
                        <button onClick={() => handleEdit(res.id)} className="btn btn-xs px-4 mb-2 btn-primary">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(res.id)} className="btn btn-xs btn-outline btn-error">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
        <p className="text-xs mt-5">*Estimated salary by date posted</p>
      </div>
    </div>
  );
};

export default Table;
