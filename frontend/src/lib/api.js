import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + `${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_URL}` + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_URL}`,
  headers: {
    Authorization: "bearer " + `${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
});
