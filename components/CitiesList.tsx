import Link from "next/link";
import { Paper, Stack, Typography } from "@mui/material";

type DataProps = {
  data: City[];
};

export default function CitiesList({ data }: DataProps) {
  return (
    <Stack spacing={3} direction='column' role='list'>
      {data?.map((city, i) => (
        <Link
          href={{
            pathname: "/weather",
            query: {
              city: city.name,
              country: city.country,
              lat: city.lat,
              lon: city.lon,
            },
          }}
          key={i}
          data-cy={`city-${i}`}
          role='listitem'
        >
          <Paper style={{ padding: "20px" }} variant='outlined'>
            <Typography className='text-xl'>{city.name}</Typography>
            <Typography className='text-lg'>
              {city.state}, {city.country}
            </Typography>

            <Typography>Lat: {city.lat}</Typography>
            <Typography>Lon: {city.lon}</Typography>
          </Paper>
        </Link>
      ))}
    </Stack>
  );
}
