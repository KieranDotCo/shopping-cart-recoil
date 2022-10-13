import { Alert, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { snackbarState } from "../../recoil/atoms/snackbar/SnackbarAtom";

const SnackbarWrapper: React.FC = () => {
  const [snackbar, setSnackbar] = useRecoilState(snackbarState);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: snackbar.vertical,
        horizontal: snackbar.horizontal,
      }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.severity}
        sx={{ width: "100%" }}
        variant={snackbar.variant}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWrapper;
