import { useEffect, useState } from "react";
import axios from "axios";
import { NewsType } from "../types";

export default function useFetch(url: string) {
  const [data, setData] = useState<NewsType[]>([]);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.response.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
