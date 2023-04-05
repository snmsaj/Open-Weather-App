import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { ArrowBack } from "@mui/icons-material";
import { CircularProgress, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import MainWeather from "@/components/MainWeather";
import OtherWeather from "@/components/OtherWeather";
import Error from "@/components/Error";

export default function WeatherPage() {
  const router = useRouter();
  const city = router.query.city;
  const country = router.query.country;
  const [weather, setWeather] = useState<Weather>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);

      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${router.query.lat}&lon=${router.query.lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        .then((res) => {
          setWeather(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    fetchWeather();
  }, [router.query]);

  return (
    <Layout>
      <main>
        <button onClick={router.back} className='back-link' data-cy='back-btn'>
          <ArrowBack sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>Back</Typography>
        </button>

        {/* Loader */}
        {loading ? (
          <div className='centerAbsolute'>
            <CircularProgress />
          </div>
        ) : null}

        {error ? <Error message={error.message} /> : null}

        {Object.keys(weather).length ? (
          <>
            <MainWeather data={weather} city={city} country={country} />
            <OtherWeather data={weather} />
          </>
        ) : null}
      </main>
    </Layout>
  );
}
