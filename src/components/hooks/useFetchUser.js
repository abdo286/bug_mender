import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../libs/supabaseClient";

const useFetchUser = ({ query, tableName, profileId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(
    async function getData(query, enableLoading = true) {
      if (!profileId) return;
      setError(null);
      if (enableLoading) setLoading(true);
      const { data, error } = await query();
      if (error) setError(error);
      else if (data) setData(data);

      setLoading(false);
    },
    [profileId]
  );

  useEffect(() => {
    const channel = supabase.channel(tableName);

    channel
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: tableName },

        // eslint-disable-next-line
        (payload) => {
          getData(query, "false");
        }
      )
      .subscribe();

    return () => channel.unsubscribe();
  }, [query, data, tableName, getData]);
  return { loading, data, error, getData };
};
export default useFetchUser;
