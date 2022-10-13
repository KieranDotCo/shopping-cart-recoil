import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  Divider,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { cartState } from "../../recoil/atoms/Cart/CartAtom";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartButton() {
  const [cart, setCart] = useRecoilState(cartState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id: number) => {
    setCart((current) => {
      return current.filter((c) => c.id !== id);
    });
  };

  const menu = [];

  if (cart.length === 0) {
    menu.push(
      <ListItem key={"no-results"}>There are no items in your cart</ListItem>
    );
  } else {
    cart.forEach((result) => {
      menu.push(
        <ListItem
          key={result.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(result.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={
              <Typography variant="inherit" noWrap>
                {result.title}
              </Typography>
            }
          />
        </ListItem>
      );
    });
  }

  if (cart.length > 1) {
    menu.push(<Divider key={"divider"} />);
    menu.push(
      <MenuItem
        key={"remove-all"}
        onClick={(e) => {
          e.stopPropagation();
          setCart([]);
        }}
      >
        Remove All
      </MenuItem>
    );
  }

  return (
    <>
      <IconButton
        aria-label="cart"
        color="inherit"
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 300,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menu}
      </Menu>
    </>
  );
}
