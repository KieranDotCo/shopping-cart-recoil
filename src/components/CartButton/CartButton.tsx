import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useRecoilValue } from "recoil";
import { cartState } from "../../recoil/atoms/Cart/CartAtom";

export default function CartButton() {
  const cart = useRecoilValue(cartState)

  return (
    <IconButton aria-label="cart" color="inherit">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
