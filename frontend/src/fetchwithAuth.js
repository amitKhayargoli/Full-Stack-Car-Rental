import axios from "axios";

export const fetchWithAuth = (url, options = {}) => {
  const token = localStorage.getItem("token");

  return axios({
    url,
    method: options.method || "GET", // Default to GET if no method is provided
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers, // Preserve other headers
    },
    data: options.body, // Attach the request body if provided
  }).then((response) => response.data);
};
