import { Box } from "@mui/material";
import React, { type ComponentPropsWithoutRef } from "react";
import { mergeSx } from "../../utils/props.js";

/**
 * Props for the {@link HolyGrail} component.
 *
 * @param variant - Defines the primary layout direction:
 * - `"expand"` → vertical layout (top-to-bottom)
 * - `"contained"` → horizontal layout (left-to-right)
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
type HolyGrailProps = { variant: "expand" | "contained" };

/**
 * Root layout container for building Holy Grail layouts.
 *
 * @remarks
 * This component defines the main layout axis and acts as the top-level container
 * for all Holy Grail layout sections such as {@link HolyGrailHeader},
 * {@link HolyGrailContent}, {@link HolyGrailRow}, {@link HolyGrailColumn}, and
 * {@link HolyGrailFooter}.
 *
 * The layout direction depends on the selected variant:
 *
 * - `"expand"` → vertical layout (`column`)
 * - `"contained"` → horizontal layout (`row`)
 *
 * The component spans the full viewport (`100vh × 100vw`) and prevents overflow
 * by default.
 *
 * All additional props are forwarded to the underlying MUI {@link Box}.
 *
 * @param props - Component props including layout variant and Box properties
 *
 * @returns React Component
 *
 * @see https://ogs-gmbh.github.io/mui-components/guide/holy-grail
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */

function HolyGrail({
  children,
  variant,
  sx,
  ...props
}: ComponentPropsWithoutRef<typeof Box> & HolyGrailProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          bgcolor: theme.palette.background.default,
          display: "flex",
          flexDirection: variant === "expand" ? "column" : "row",
          overflow: "hidden",
          height: "100vh",
          width: "100vw"
        }),
        ...mergeSx(sx)
      ]}
      {...props}>
      {children}
    </Box>
  );
}

export type { HolyGrailProps };

export { HolyGrail };
