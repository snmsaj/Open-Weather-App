import { TextField, styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  input: {
    color: "white",
  },
  "& label": {
    color: "white",
    opacity: "80%",
  },
  "& label.Mui-focused": {
    color: "white",
    opacity: "100%",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
