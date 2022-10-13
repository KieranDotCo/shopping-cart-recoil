import { Typography, Box } from "@mui/material";
import Result from "../../models/Result";
import AddToCart from "../AddToCart/AddToCart";

type Props = {
  result: Result;
};

const SearchResult: React.FC<Props> = (props) => {
  return (
    <Box mt={2} mb={2} className="SearchResult">
      <Typography variant="h6" component="h2">
        {props.result.title}
      </Typography>
      <Typography variant="body2">{props.result.summary}</Typography>
      <AddToCart result={props.result}/>
    </Box>
  );
};

export default SearchResult;
