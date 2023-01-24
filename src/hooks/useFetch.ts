import { useEffect, useState } from "react";
import axios from "axios";
import { NewsType, StoreState } from "../types";
import { useSelector } from "react-redux";

export default function useFetch(url: string) {
  const [data, setData] = useState<NewsType[]>([]);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const orderBy = useSelector((state: StoreState) => state.news.sort);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(url);
        setData(response.data.response.results);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
