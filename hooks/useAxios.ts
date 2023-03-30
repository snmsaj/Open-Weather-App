import { useEffect, useState, useReducer } from "react";
import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.openweathermap.org";

export default function useAxios(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${url}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setData(response.data);
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return [data, loading, error];
}
