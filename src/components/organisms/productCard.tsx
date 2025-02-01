import { styled } from "@mui/system";
import { Button, Typography, Box } from "@mui/material";
import { useActions } from "../../store/custom-hooks/hooks";
import { useState } from "react";
import ProductDetailsModal from "./productDetails";

// Styled components
const ProductCard = styled(Box)({
  transform: "scale(1)",
  position: "relative",
  maxWidth: "355px",
  width: "100%",
  borderRadius: "25px",
  padding: "20px 30px 30px 30px",
  background: "#fff",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  zIndex: 3,
  overflow: "hidden",
});

const LogoCart = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const MainImages = styled(Box)({
  position: "relative",
  height: "15rem",
  maxHeight: "15rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ProductDetails = styled(Box)({
  marginTop: "20px",
  height: "10rem",
});

const Price = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

const CustomButton = styled(Button)({
  position: "relative",
  height: "100%",
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "18px",
  fontWeight: "600",
  letterSpacing: "1px",
  color: "#fff",
  cursor: "pointer",
  background: "#091014",
  borderRadius: "0.1rem",
  fontFamily: "Work Sans",
});

const ProductCardComponent = ({ product }: any) => {
  //   update redux store with products
  const { setOrders } = useActions();

  // open modal
  const [open, setOpen] = useState(false);
  return (
    <>
      <ProductCard onClick={() => setOpen(true)}>
        <LogoCart>
          <img
            src="https://visibuy.com.ng/VisiBuy%20-%20Black.png"
            alt="visibuy"
            style={{ width: "40px", objectFit: "cover" }}
          />
        </LogoCart>
        <MainImages>
          <img src={product.image} alt="logo" width={150} />
        </MainImages>

        <ProductDetails>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: "black",
              fontFamily: "cursive",
              fontSize: "1.2rem",
            }}
          >
            {product.title.slice(0, 30)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              margin: "0",
              fontFamily: "Work Sans",
              fontWeight: "500",
              fontSize: "0.8rem",
              color: "black",
              textAlign: "justify",
              padding: "1rem",
            }}
          >
            {product.description.slice(0, 150)}...
          </Typography>
        </ProductDetails>
        <Price>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: 600,
              color: "black",
              fontFamily: "cursive",
            }}
          >
            ${product.price}
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              marginTop: "-4px",
              color: "#707070",
            }}
          >
            {product.price_description}
          </Typography>
        </Price>
        <Box
          sx={{
            position: "relative",
            height: "50px",
            width: "100%",
            borderRadius: "25px",
            marginTop: "30px",
            overflow: "hidden",
          }}
        >
          <CustomButton
            onClick={() => {
              setOrders(product);
            }}
          >
            Add To Cart
          </CustomButton>
        </Box>
      </ProductCard>{" "}
      <ProductDetailsModal
        product={product}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default ProductCardComponent;
