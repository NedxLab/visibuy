import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { useActions, useAppSelector } from "../store/custom-hooks/hooks";
import { useEffect, useMemo, useState } from "react";
import { styled } from "@mui/material";
import { useFetchProducts } from "../hooks/useFetchProducts";

const SearchBar = styled(TextField)({
  width: "100%",
  color: "#fff",
  "& input": {
    color: "white",
    border: "1px solid black",
    padding: "10px",
  },
});
export default function Search() {
  // get sorted products from store
  const finalProducts = useAppSelector((state) => state.products);

  //   update redux store with products
  const { setSortedProducts } = useActions();

  // set search parameters
  const [searchQuery, setSearchQuery] = useState<string>("");

  //  fetch products from api
  const { products } = useFetchProducts();
  // Filter products based on search query
  const sortedProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  //   update redux store with sorted products
  useEffect(() => {
    if (JSON.stringify(sortedProducts) === JSON.stringify(finalProducts))
      return;
    setSortedProducts(sortedProducts);
  }, [JSON.stringify(sortedProducts)]);

  return (
    <Stack direction="row">
      <SearchBar
        placeholder="Search"
        variant="outlined"
        size="small"
        onChange={(e) => setSearchQuery(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}
