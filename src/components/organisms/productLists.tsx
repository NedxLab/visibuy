import React, { useState } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import {
  Typography,
  TextField,
  MenuItem,
  Skeleton,
  Select,
  FormControl,
  Container,
  styled,
  Box,
} from "@mui/material";
import ProductCardComponent from "./productCard";
import Grid from "@mui/material/Grid2";

const CustomTextField = styled(TextField)({
  width: "10rem",
  backgroundColor: "white",
  border: "none",
  padding: 0,
  borderRadius: "0.4rem",
  "& .MuiOutlinedInput-root": {
    padding: "0.1rem 0",
    "& fieldset": { borderColor: "black" },
    "&:hover fieldset": { borderColor: "black" },
    "&.Mui-focused fieldset": { borderColor: "black" },
  },
  "& .MuiInputBase-input": {
    color: "black",
    padding: "5px",
  },

  "@media (max-width:640px)": {},
});
const CustomSelect = styled(Select)({
  width: "10rem",
  backgroundColor: "white",
  border: "none",
  padding: "0.1rem 0",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
  "& .MuiSelect-select": { color: "black", padding: "5px" },
  "@media (max-width:640px)": {},
});
const CustomLabel = styled("h1")({
  fontSize: "0.7rem",
  fontWeight: 600,
  color: "gray",
  fontFamily: "Work Sans",
});
const ScrollContainer = styled(Box)({
  width: "100%",
  overflowX: "auto",
  whiteSpace: "nowrap",
  margin: "2rem 0",
});
const FilterWrapper = styled(Box)({
  fontFamily: "Work Sans",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  overflowX: "auto",
  flexWrap: "nowrap",
  width: "max-content",
  gap: "1.5rem",
});
const ProductWrapper = styled(Container)({
  overflowX: "hidden",
});

const categories = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const [category, setCategory] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<string>("lowToHigh");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  // Filtered products based on category and price
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = category === "All" || product.category === category;
    const isPriceInRange =
      product.price >= minPrice && product.price <= maxPrice;

    return isCategoryMatch && isPriceInRange;
  });

  // Sort the filtered products based on the price filter
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (priceFilter === "lowToHigh") {
      return a.price - b.price;
    } else if (priceFilter === "highToLow") {
      return b.price - a.price;
    } else {
      return 0; // 'Recommended' is handled differently, no sorting based on price.
    }
  });

  return (
    <ProductWrapper>
      {/* Filter Section */}

      <ScrollContainer>
        <FilterWrapper>
          <Grid container spacing={2} alignItems="center">
            <CustomLabel>Category :</CustomLabel>
            <CustomTextField
              select
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <CustomLabel>Price :</CustomLabel>
            <FormControl fullWidth sx={{ width: "10rem", padding: 0 }}>
              <CustomSelect
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as string)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Price Filter
                </MenuItem>
                <MenuItem value="lowToHigh">Low to High</MenuItem>
                <MenuItem value="highToLow">High to Low</MenuItem>
                <MenuItem value="recommended">Recommended</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <CustomLabel>Min :</CustomLabel>
            <CustomTextField
              type="number"
              fullWidth
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <CustomLabel>Max :</CustomLabel>
            <CustomTextField
              type="number"
              fullWidth
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </Grid>
        </FilterWrapper>
      </ScrollContainer>
      {/* Product Grid */}
      <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
        {loading ? (
          // Skeleton Loaders
          <>
            <Grid container spacing={1}>
              <Grid size={5} />
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={4}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={8}>
                <Skeleton height={100} />
              </Grid>

              <Grid size={12}>
                <Skeleton height={150} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>

              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          </>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          sortedProducts.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))
        )}
      </Grid>
    </ProductWrapper>
  );
};

export default ProductList;
