import { useCallback, useEffect, useState } from "react";

const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async function getData(query) {
    setError(null);
    setLoading(true);
    const { data, error } = await query();
    if (error) setError(error);
    else if (data) setData(data);

    setLoading(false);
  }, []);

  useEffect(() => {
    getData(query);
  }, [query, getData]);
  return { loading, data, error };
};
export default useFetch;
