import { Box, Typography } from "@mui/material";
import type { ComponentPropsWithRef } from "react";
import { mergeSx } from "../props.js";

type ShortcutProps = ComponentPropsWithRef<typeof Typography>;

function Shortcut({ children, sx, ...props }: ShortcutProps) {
  return (
    <Typography
      variant="body2"
      sx={[
        {
          color: "text.secondary",
          backgroundImage: "var(--Paper-overlay)",
          bgcolor: "background.paper",
          borderColor: "divider",
          borderWidth: 1,
          borderBottomWidth: 4,
          borderStyle: "solid",
          width: "max-content",
          px: 0.5,
          borderRadius: 1
        },
        ...mergeSx(sx)
      ]}
      {...props}>
      {children}
    </Typography>
  );
}

type ShortcutGroupProps = ComponentPropsWithRef<typeof Box>;

function ShortcutGroup({ children, sx, ...props }: ShortcutGroupProps) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          gap: 0.5
        },
        ...mergeSx(sx)
      ]}
      {...props}>
      {children}
    </Box>
  );
}

type ShortcutConnectorProps = ComponentPropsWithRef<typeof Typography>;

function ShortcutConnector({ children, ...props }: ShortcutConnectorProps) {
  return (
    <Typography variant="body2" {...props}>
      {children}
    </Typography>
  );
}

export type { ShortcutProps, ShortcutGroupProps, ShortcutConnectorProps };

export { Shortcut, ShortcutGroup, ShortcutConnector };
