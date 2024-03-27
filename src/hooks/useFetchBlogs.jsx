import { useState, useEffect } from "react";
import api from "../api/data"; // import your API module

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useFetchBlogs;
