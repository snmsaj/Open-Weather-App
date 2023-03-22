// Create a Next.js React application that allows the user to input a city into a search field and displays the weather associated with that city once they submit it. You can use weather data from OpenWeatherMap. Once you're finished, create a Github Action workflow that deploys the app to Github Pages and send me the link to the site.

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=athens,ga,us&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
  // create api call

  const fetchWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    axios.get(url).then((res) => {
      console.log(res.data);
      setWeather(res.data);
    });

    setIsLoading(false);
  };
  return (
    <>
      <Head>
        <title>City Weather</title>
        <meta name='description' content='Search weather in a city' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <form onSubmit={fetchWeather}>
          <input type='text' placeholder='Search City' />
          <button type='submit'>Search</button>
        </form>
      </main>
    </>
  );
}
