import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import Result from "../../models/Result";
import { cartState } from "../../recoil/atoms/Cart/CartAtom";

type Props = {
  result: Result
};

const AddToCart: React.FC<Props> = (props) => {
  const [cart, setCart] = useRecoilState(cartState);


  const addToCart = () => {
    setCart((current) => {
      return [...current, props.result]
    })
  }

  const removeFromCart = () => {
    setCart((current) => {
      return current.filter((c) => c.id !== props.result.id)
    })
  }

  if (cart.find((r) => r.id === props.result.id)) {
    return <Button onClick={removeFromCart} variant="outlined">Remove From Cart</Button>;
  }

  return <Button onClick={addToCart} variant="outlined">Add To Cart</Button>;
};

export default AddToCart;
