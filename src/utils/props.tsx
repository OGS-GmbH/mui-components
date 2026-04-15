import type { SxProps, Theme } from "@mui/material";

function mergeSx(sx: SxProps<Theme> | undefined): any[] {
  if (!sx) return [];

  return Array.isArray(sx) ? sx : [sx];
}

export { mergeSx };
