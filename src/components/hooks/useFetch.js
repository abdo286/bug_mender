import { useEffect, useState } from "react";

const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      setError(null);
      setLoading(true);
      console.log('war', query)
      const { data, error } = await query();

      if (error) setError(error);
      else if (data) setData(data);

      setLoading(false);
    }
    getData();
  }, [query]);
  return { loading, data, error };
};
export default useFetch;
