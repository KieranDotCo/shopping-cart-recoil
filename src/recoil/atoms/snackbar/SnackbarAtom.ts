import { AlertColor } from "@mui/material";
import { atom } from "recoil";

export const snackbarState = atom({
  key: "snackbarState",
  default: {
    open: false,
    message: "",
    severity: "success" as AlertColor,
    horizontal: "center" as "center" | "left" | "right",
    vertical: "bottom" as "bottom" | "top",
    variant: 'filled' as "filled" | "standard" | "outlined"
  },
});
