import { useEffect, useState } from "react";
import axios from "axios";

const makeRequest = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_URL}`,
  headers: {
    Authorization: "bearer " + `${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
  },
});

const useFetchv2 = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchv2;
