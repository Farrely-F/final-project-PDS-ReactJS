import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  // Mapping Data
  const baseUrl = "https://dev-example.sanbercloud.com/api/job-vacancy";
  const accesToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjg3NDQ5MTg4LCJleHAiOjE2ODgwNTM5ODgsIm5iZiI6MTY4NzQ0OTE4OCwianRpIjoieVk2c1RFdkRzOUJsZ2pXcSIsInN1YiI6MTM2NywicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.MbIgCPlE81rDooA8e1iuNi4J-HN6KoqVWzv8472Uib8";

  // State Data
  const [jobData, setJobData] = useState([]);

  // State Loading
  const [isLoading, setIsLoading] = useState(false);

  // For Data
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    jobTenure: "",
    jobType: "",
    jobDescription: "",
    jobQualification: "",
    salaryMin: 0,
    salaryMax: 0,
    companyImageUrl: "",
    jobStatus: "",
  });
  const [selectedJobId, setSelectedJobId] = useState(null);

  const [fetchStatus, setFetchStatus] = useState(true);

  // Fetching Data
  useEffect(() => {
    setIsLoading(true);
    if (fetchStatus === true) {
      axios
        .get(baseUrl)
        .then((response) => {
          const data = response.data.data;

          // Map the data
          const mappedData = data.map((job) => {
            return {
              id: job.id,
              createdAt: job.created_at,
              updatedAt: job.updated_at,
              title: job.title,
              jobDescription: job.job_description,
              jobQualification: job.job_qualification,
              jobType: job.job_type,
              jobTenure: job.job_tenure,
              jobStatus: job.job_status,
              companyName: job.company_name,
              companyImageUrl: job.company_image_url,
              companyCity: job.company_city,
              salaryMin: job.salary_min,
              salaryMax: job.salary_max,
              salary: job.salary_min + "-" + job.salary_max,
            };
          });

          setJobData(mappedData); // Update the state with the mapped data
          setFetchStatus(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false); // Set isLoading to false after the fetching process is completed
        });
    }
  }, [fetchStatus, setFetchStatus]);

  // Loading Function
  const renderLoading = () => {
    if (jobData.length === 0) {
      return (
        <div className="container flex item-center justify-center gap-5">
          <span className="loading loading-spinner loading-md"></span>
          <p className="text-center">Loading data...</p>
        </div>
      );
    }
    return null;
  };

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
            headers: {
              Authorization: `Bearer ${accesToken}`,
            },
          })
          .then((response) => {
            console.log("delete success", response);
            // Hapus data dari state
            const updatedData = jobData.filter((job) => job.id !== id);
            setJobData(updatedData);
            setFetchStatus(true);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // Handle Edit
  const handleEdit = (jobId) => {
    const selectedJob = jobData.find((job) => job.id === jobId);
    Swal.fire({
      title: "Are you sure want to Edit?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Edit the Data!",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({
          companyName: selectedJob.companyName,
          title: selectedJob.title,
          jobTenure: selectedJob.jobTenure,
          jobType: selectedJob.jobType,
          jobDescription: selectedJob.jobDescription,
          jobQualification: selectedJob.jobQualification,
          salaryMin: selectedJob.salaryMin,
          salaryMax: selectedJob.salaryMax,
          jobStatus: selectedJob.jobStatus,
          companyImageUrl: selectedJob.companyImageUrl,
        });
        setSelectedJobId(jobId);
        navigate(`/dashboard/edit/${jobId}`);
      }
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the payload
    const payload = {
      title: formData.title,
      job_description: formData.jobDescription,
      job_qualification: formData.jobQualification,
      job_tenure: formData.jobTenure,
      job_type: formData.jobType,
      salary_min: formData.salaryMin,
      salary_max: formData.salaryMax,
      company_name: formData.companyName,
      job_status: formData.jobStatus,
      company_image_url: formData.companyImageUrl,
    };

    // Make the API call to add the job vacancy
    if (selectedJobId) {
      // Update the existing job vacancy
      axios
        .put(`${baseUrl}/${selectedJobId}`, payload, {
          headers: {
            Authorization: `Bearer ${accesToken}`,
          },
        })
        .then((response) => {
          // Find the updated job in the jobData array and update it
          const updatedJobData = jobData.map((job) => {
            if (job.id === selectedJobId) {
              return response.data; // Use the response data as the updated job
            }
            return job; // Return the original job for other jobs in the array
          });
          Swal.fire("Data sucessfully edited", "Congratulation! your data has been edited!", "success");
          setFetchStatus(true);
          navigate("/vacancy");

          // Update the jobData state with the updated job data
          setJobData(updatedJobData);

          // Clear the selectedJobId
          setSelectedJobId(null);

          // Clear the form data
          setFormData({
            companyName: "",
            title: "",
            jobTenure: "",
            jobType: "",
            jobDescription: "",
            jobQualification: "",
            salaryMin: 0,
            salaryMax: 0,
            companyImageUrl: "",
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // Create a new job vacancy
      axios
        .post(baseUrl, payload, {
          headers: {
            Authorization: `Bearer ${accesToken}`,
          },
        })
        .then((response) => {
          Swal.fire("Data sucessfully added", "Congratulation! your data has been added!", "success");
          // Add the new job to the jobData array
          setJobData([...jobData, response.data]);
          setFetchStatus(true);

          // Clear the form data
          setFormData({
            companyName: "",
            title: "",
            jobTenure: "",
            jobType: "",
            jobDescription: "",
            jobQualification: "",
            salaryMin: 0,
            salaryMax: 0,
            companyImageUrl: "",
          });
          navigate("/vacancy");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // Handle Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle Job Details
  const handleDetailsClick = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  const shorten = (text, maxWords) => {
    const words = text.split(" ");

    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }

    return text;
  };

  const formatIDR = (amount) => {
    const suffixes = ["", "K", "M", "B", "T"];
    const tier = (Math.log10(amount) / 3) | 0;

    if (tier === 0) {
      return amount;
    }

    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);

    const scaledAmount = amount / scale;
    return `IDR ${scaledAmount.toFixed(1)} ${suffix}`;
  };

  let handleFunction = {
    handleChange,
    handleDelete,
    handleEdit,
    handleSubmit,
    renderLoading,
    handleDetailsClick,
    shorten,
    formatIDR,
  };

  let handleState = {
    jobData,
    setJobData,
    isLoading,
    setIsLoading,
    formData,
    setFormData,
    selectedJobId,
    setSelectedJobId,
  };

  return (
    <GlobalContext.Provider
      value={{
        handleState,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
