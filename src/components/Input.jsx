import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Input() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { formData } = handleState;

  const { handleChange, handleSubmit } = handleFunction;

  return (
    <>
      <div className="flex justify-center my-5">
        <form className="w-[90%]" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input value={formData.companyName} onChange={handleChange} type="text" name="companyName" placeholder="Company Name" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Job Role</span>
          </label>
          <input value={formData.title} onChange={handleChange} type="text" name="title" placeholder="Role" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <input type="text" value={formData.jobTenure} onChange={handleChange} name="jobTenure" className="input input-bordered w-full max-w-xs" placeholder="Intern/Full-Time/Contract" />
          <label className="label">
            <span className="label-text">Working Arrangement</span>
          </label>
          <input type="text" value={formData.jobType} onChange={handleChange} name="jobType" className="input input-bordered w-full max-w-xs" placeholder="On-site/WFH/WFA" />
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea value={formData.jobDescription} onChange={handleChange} type="text" name="jobDescription" placeholder="Write a description ..." className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Qualification</span>
          </label>
          <textarea value={formData.jobQualification} onChange={handleChange} type="text" name="jobQualification" placeholder="Write a description ..." className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Salary</span>
          </label>
          <div className="flex gap-3 items-center">
            <input value={formData.salaryMin} onChange={handleChange} type="number" name="salaryMin" placeholder="Minimun expected salary" className="input input-bordered w-full max-w-xs" />
            <span> - </span>
            <input value={formData.salaryMax} onChange={handleChange} type="number" name="salaryMax" placeholder="Maximum expected salary" className="input input-bordered w-full max-w-xs" />
          </div>
          <label className="label">
            <span className="label-text">Job Status</span>
          </label>
          <input value={formData.jobStatus} onChange={handleChange} type="text" name="jobStatus" placeholder="1 for available 0 for close" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input value={formData.companyImageUrl} onChange={handleChange} type="text" name="companyImageUrl" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
          <br></br>
          <input className="cursor-pointer btn btn-md my-5" type="Submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
}

export default Input;
