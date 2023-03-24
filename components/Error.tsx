import { AxiosError } from "axios";
import { Typography } from "@mui/material";

type ErrorProps = { message: string };

export default function Error({ message }: ErrorProps) {
  return (
    <div
      className='centerAbsolute'
      style={{ textAlign: "center", color: "white" }}
    >
      <Typography variant='h4'>{message}</Typography>
      <Typography variant='h5'>Please enter a valid city</Typography>
    </div>
  );
}
