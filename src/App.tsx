import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { RecoilRoot } from "recoil";
import SnackbarWrapper from "./components/SnackbarWrapper/SnackbarWrapper";
import { Divider, Paper } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";

export default function App() {
  return (
    <RecoilRoot>
      <Navbar/>
      <Container maxWidth="lg" disableGutters style={{marginTop: '1rem'}}>
        <Paper style={{padding: '1rem',}} elevation={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Results
          </Typography>
          <Divider />
          <SearchResults/>
          <SnackbarWrapper />
        </Paper>
      </Container>
    </RecoilRoot>
  );
}
