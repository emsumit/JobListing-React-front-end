import axios from "axios";
const backendUrl = `http://localhost:3000/api/v1/job`;

export const createJobPost = async (jobPostPayload) => {
  try {
    const reqUrl = `${backendUrl}/create`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, jobPostPayload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const jobPostDetailsById = async (jobId, userId) => {
  try {
    const reqUrl = `${backendUrl}/job-details/${jobId}/${userId}`;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
  try {
    const reqUrl = `${backendUrl}/update/${jobPostId}`;
    const token = JSON.parse(localStorage.getItem("token"));
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, updatedFormData);
    return response?.data;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};

export const getAllJobs = async (filter) => {
  try {
    const userId = JSON.parse(localStorage.getItem("userId")) || "";
    const reqUrl = `${backendUrl}/all/${userId}?searchQuery=${
      filter?.title || ""
    }&skills=${filter?.skills || ""}`;
    const response = await axios.get(reqUrl);
    return response?.data;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};
