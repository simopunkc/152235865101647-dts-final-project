import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  backgroundColor: "#eee",
  color: "#555",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    }
  }
});

export default CustomTextField;