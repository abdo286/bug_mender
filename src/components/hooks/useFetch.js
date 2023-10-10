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
    console.log("query 500", query);
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
          console.log("unique500000dsadas", payload);
          getData(query, false);
        }
      )
      .subscribe();

    // return () => channel.unsubscribe();
  }, [query, tableName, getData]);

  useEffect(() => {
    getData(query);
  }, [query, getData]);
  return { loading, data, error };
};
export default useFetch;

// if (Array.isArray(data)) {
//   setData((prevData) => {
//     switch (payload.eventType) {
//       case "INSERT": {
//         const setData = async () => {
//           const { data: newData, error } = await query.eq(
//             "id",
//             payload.new.id
//           );

//           if (error) {
//             console.error(error);
//             getData(query);
//           } else {
//             setData((prevData) => [...prevData, newData[0]]);
//           }
//         };

//         setData();
//         break;
//       }

//       case "DELETE":
//         return prevData.filter((item) => item.id !== payload.new.id);
//       case "UPDATE":
//         return prevData.map((item) =>
//           item.id === payload.new.id ? payload.new : item
//         );
//       default:
//         return prevData;
//     }
//   });
// } else if (typeof data === "object") {
//   setData(payload.new);
// }
