import ProductCardComponent from "../organisms/productCard";
import Grid from "@mui/material/Grid2";
import { useAppSelector } from "../../store/custom-hooks/hooks";

const Orders = () => {
  // get sorted products from store
  const orderedProducts = useAppSelector((state) => state.orders);

  return (
    <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
      {orderedProducts.length > 0 ? (
        orderedProducts.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))
      ) : (
        <h1>No Orders</h1>
      )}
    </Grid>
  );
};

export default Orders;
