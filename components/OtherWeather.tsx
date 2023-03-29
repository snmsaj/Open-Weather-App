import { List, ListItem, ListSubheader, Typography } from "@mui/material";

type WeatherProps = { data: Weather };
const style = { display: "flex", justifyContent: "space-between", gap: "4px" };

const newDate = (time: number | undefined) => {
  return typeof time === "number"
    ? new Date(time * 1000)?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
};

export default function OtherWeather({ data }: WeatherProps) {
  const { main, wind, clouds, sys } = data;
  const sunrise = newDate(sys?.sunrise);
  const sunset = newDate(sys?.sunset);

  return (
    <List
      sx={{ borderRadius: "4px", bgcolor: "background.paper" }}
      component='div'
      subheader={
        <ListSubheader sx={{ borderRadius: "4px" }} component='div'>
          Current Weather
        </ListSubheader>
      }
    >
      <ListItem sx={style} divider>
        <Typography>Feels Like</Typography>
        <Typography>{main?.feels_like.toFixed(0)}&#176;</Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>Sunrise / Sunset</Typography>
        <Typography>
          {sunrise} / {sunset}
        </Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>High / Low</Typography>
        <Typography>
          {main?.temp_max.toFixed(0)}&#176;/{main?.temp_min.toFixed(0)}&#176;
        </Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>Wind</Typography>
        <Typography>{wind?.speed} mph</Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>Humidity</Typography>
        <Typography>{main?.humidity}%</Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>Clouds</Typography>
        <Typography>{clouds?.all}%</Typography>
      </ListItem>

      <ListItem sx={style} divider>
        <Typography>Pressure</Typography>
        <Typography>{main?.pressure}</Typography>
      </ListItem>

      <ListItem sx={style}>
        <Typography>Visibility</Typography>
        <Typography>{data.visibility}</Typography>
      </ListItem>
    </List>
  );
}
