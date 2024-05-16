import axios from "axios";
const backendUrl = `http://localhost:3000/api/v1/auth`;

export const registerUser = async ({ email, password, name, mobile }) => {
  try {
    const reqUrl = `${backendUrl}/register`;
    const response = await axios.post(reqUrl, {
      name,
      email,
      password,
      mobile,
    });
    return;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${backendUrl}/login`;
    const response = await axios.post(reqUrl, {
      email,
      password,
    });

    if (response.data?.token) {
      localStorage.setItem("token", JSON.stringify(response.data?.token));
      localStorage.setItem("name", JSON.stringify(response.data?.name));
      localStorage.setItem("userId", JSON.stringify(response.data?.userId));
    }
    return true;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};
