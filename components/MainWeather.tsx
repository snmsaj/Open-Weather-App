import Image from "next/image";
import { Paper, Typography } from "@mui/material";

type WeatherProps = {
  data: Weather;
  city: string | string[] | undefined;
  country: string | string[] | undefined;
};

export default function MainWeather({ data, city, country }: WeatherProps) {
  const { weather, main } = data;

  return (
    <Paper sx={{ padding: "16px", marginBottom: "16px" }} elevation={0}>
      <Typography variant='h5'>
        {city}, {country}
      </Typography>
      <div className='temp-container'>
        <div>
          <Typography variant='h1'>{main?.temp?.toFixed(0)}&#176;</Typography>
          <Typography variant='h6' sx={{ textTransform: "capitalize" }}>
            {weather?.[0].description}
          </Typography>
        </div>

        <Image
          src={`https://openweathermap.org/img/wn/${weather?.[0].icon}@2x.png`}
          alt='weather image'
          width='120'
          height='120'
        />
      </div>
    </Paper>
  );
}
