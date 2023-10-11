import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../libs/supabaseClient";

const useFetch = ({ query, tableName }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async function getData(
    query,
    enableLoading = true
  ) {
    setError(null);

    if (enableLoading) setLoading(true);
    const { data, error } = await query();
    if (error) {
      console.log("Error: ", error);
      setError(error);
    } else if (data) setData(data);

    setLoading(false);
  }, []);

  useEffect(() => {
    const channel = supabase.channel(tableName);

    channel
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: tableName },

        // eslint-disable-next-line
        (payload) => {
          getData(query, false);
        }
      )
      .subscribe();

    return () => channel.unsubscribe();
  }, [query, tableName, getData]);

  useEffect(() => {
    getData(query);
  }, [query, getData]);
  return { loading, data, error };
};
export default useFetch;

