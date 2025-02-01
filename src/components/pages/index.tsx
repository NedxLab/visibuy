import Box from "@mui/material/Box";
import Dashboard from "./dashboard";
import Orders from "./orders";
export default function PageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname.startsWith("/orders") ? <Orders /> : <Dashboard />}
    </Box>
  );
}
