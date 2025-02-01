import Typography from "@mui/material/Typography";
import { type SidebarFooterProps } from "@toolpad/core/DashboardLayout";

export default function SidebarFooter({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini
        ? "© VisiBuy"
        : `© ${new Date().getFullYear()} VisiBuy | Made with love by Odo Chinedu`}
    </Typography>
  );
}
