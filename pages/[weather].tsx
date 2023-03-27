import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import axios from "axios";
import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Layout from "@/components/Layout";
import MainWeather from "@/components/MainWeather";
import OtherWeather from "@/components/OtherWeather";

export default function WeatherPage({
  data,
  city,
  country,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <main>
        <Link href='/' className='back-link'>
          <ArrowBack sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>Back</Typography>
        </Link>

        <MainWeather data={data} city={city} country={country} />
        <OtherWeather data={data} />
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { lat, lon, city, country } = context.query;

  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=imperial`
  );
  const data: Weather = res.data;

  return { props: { data, city, country } };
};
