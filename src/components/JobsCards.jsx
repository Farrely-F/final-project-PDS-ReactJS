import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Searchbar from "./Searchbar";

const JobsCards = () => {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { jobData } = handleState;
  const { renderLoading, handleDetailsClick } = handleFunction;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(jobData);

  // Filter the data based on search query
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = jobData.filter((job) => job.title.toLowerCase().includes(query.toLowerCase()) || job.companyName.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filtered);
  };

  // render
  return (
    <>
      <Searchbar onChange={handleSearch} />
      <div className="my-10">
        {filteredData.length == 0 && (
          <div className="min-h-screen">
            <h2 className="text-center text-3xl font-bold">404 Not Found!</h2>
            <p className="text-center">Sorry, the data that you are looking for is not found!</p>
            <div className="flex justify-center mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="text-center">{renderLoading()}</div>
        <div className="container grid m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-5 max-sm:p-5 gap-y-10 gap-x-5">
          {filteredData.map((res) => {
            return (
              <div key={res.id} className="card bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 origin-center">
                <figure className="object-cover" style={{ width: "100%", height: "200px" }}>
                  <img className="object-cover" style={{ width: "100%", height: "100%" }} src={res.companyImageUrl} alt="Company" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">
                    {res.companyName}
                    <div>{res.jobStatus > 0 ? <div className="badge badge-secondary">Open</div> : <div className="badge badge-secondary">Closed</div>}</div>
                  </h2>
                  <h2>{res.title}</h2>
                  <h2>{res.jobTenure}</h2>
                  <h2>{res.jobType}</h2>
                  <h2 className="text-sm">
                    <span className="block">Posted:</span>
                    {res.createdAt}
                  </h2>
                </div>
                <div className="card-actions justify-end m-5">
                  <div>
                    {res.jobStatus > 0 ? (
                      <button className="btn btn-success btn-sm" onClick={() => handleDetailsClick(res.id)}>
                        Details
                      </button>
                    ) : (
                      <div className="badge badge-disabled">Closed</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default JobsCards;
