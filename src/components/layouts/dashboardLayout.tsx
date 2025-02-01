import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppProvider,
  Router,
  type Navigation,
} from "@toolpad/core/AppProvider";
import { DashboardLayout as Layout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Search from "../../features/search";
import SidebarFooter from "./footer";
import CustomTheme from "../../features/theme";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{ children: (router: Router) => React.ReactNode }>) {
  const router = useDemoRouter("/orders");
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            src="https://visibuy.com.ng/VisiBuy%20-%20Black.png"
            alt="visibuy"
            style={{
              width: "4rem",
              position: "absolute",
              top: "50%",
              transform: "translate(0%, -50%)",
            }}
          />
        ),
        title: "",
        homeUrl: "/",
      }}
      router={router}
      theme={CustomTheme}
    >
      <Layout
        slots={{
          toolbarActions: Search,
          sidebarFooter: SidebarFooter,
        }}
      >
        {children(router)}
      </Layout>
    </AppProvider>
  );
}
