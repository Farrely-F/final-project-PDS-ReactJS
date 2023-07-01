import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function JobDetails() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { jobData } = handleState;
  const { renderLoading, formatIDR } = handleFunction;

  const { id } = useParams(); // Access the ID from the URL

  // Convert the ID to the appropriate data type (e.g., number)
  const filteredJobData = jobData.filter((job) => job.id === Number(id));

  return (
    <div className="m-10 min-h-screen">
      <div className="text-center">{renderLoading()}</div>
      {filteredJobData.length !== 0 &&
        filteredJobData.map((res) => {
          return (
            <div key={res.id} className="card lg:card-side bg-neutral shadow-xl">
              <figure className="w-[250px]">
                <img className="object-cover" src={res.companyImageUrl} alt="Album" />
              </figure>
              <div className="card-body lg:w-[25%]">
                <h2 className="card-title">{res.companyName}</h2>
                <h2>{res.title}</h2>
                <div className="flex gap-5 items-center">
                  <h2 className="badge">{res.jobTenure}</h2>
                  <h2>{res.jobType}</h2>
                </div>
                <h2 className="font-bold">Job Description:</h2>
                <p>{res.jobDescription}</p>
                <h2 className="font-bold">Job Qualification:</h2>
                <p>{res.jobQualification}</p>
                <h2 className="font-bold">Salary:</h2>
                <p>
                  Est:
                  {formatIDR(res.salaryMin)} - {formatIDR(res.salaryMax)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default JobDetails;
