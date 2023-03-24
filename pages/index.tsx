import { useState } from "react";
import axios, { AxiosError } from "axios";
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CitiesList from "@/components/CitiesList";
import Error from "@/components/Error";
import { CssTextField } from "@/components/CssTextField";

export default function Home() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  // Fetch Cities
  const getCities = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setCities(res.data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setCities([]);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <main>
      {/* Search */}
      <form onSubmit={getCities} style={{ marginBottom: "16px" }}>
        <CssTextField
          type='text'
          label='Search City'
          variant='outlined'
          margin='normal'
          sx={{ color: "white" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton type='submit' edge='end'>
                  <SearchIcon sx={{ color: "white", opacity: "90%" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setCityInput(e.target.value)}
          fullWidth
        />
      </form>

      {/* Loader */}
      {loading ? (
        <div className='centerAbsolute'>
          <CircularProgress />
        </div>
      ) : null}

      {error ? <Error message={error.message} /> : null}

      {!cities.length && !error && !loading ? (
        <div className='centerAbsolute'>
          <Typography variant='h4' sx={{ textAlign: "center", color: "white" }}>
            Please search a city
          </Typography>
        </div>
      ) : null}

      {/* Cities data */}
      {cities.length ? <CitiesList data={cities} /> : null}
    </main>
  );
}
