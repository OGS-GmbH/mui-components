import type { SxProps, Theme } from "@mui/material";

/**
 * Normalizes the `sx` prop into an array.
 *
 * @remarks
 * MUI allows the `sx` prop to be defined as a single value or an array.
 * This helper ensures that the result is always an array, which simplifies
 * composition and spreading of styles.
 *
 * @param sx - The `sx` prop value (single or array)
 *
 * @returns An array of `sx` entries
 *
 * @since 1.1.0
 * @category Utils
 * @author Simon Kovtyk
 */
function mergeSx(sx: SxProps<Theme> | undefined): any[] {
  if (!sx) return [];

  return Array.isArray(sx) ? sx : [sx];
}

export { mergeSx };
