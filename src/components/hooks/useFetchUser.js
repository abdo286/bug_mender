import { useCallback, useState } from "react";

const useFetchUser = () => {
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

  return { loading, data, error, getData };
};
export default useFetchUser;
