"use client";

import { Box, styled } from "@mui/material";
import type { ComponentPropsWithRef, FC } from "react";

/**
 * Props for Holy Grail layout containers.
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
type HolyGrailContainerProps = ComponentPropsWithRef<typeof Box> & {
  /**
   * Enables scrolling (`overflow: auto`) when `true`, otherwise `hidden`
   * @default `false`
   */
  overflow?: boolean;
  /**
   * Allows the container to grow (`flex-grow`) when `true`
   * @default `false`
   */
  expand?: boolean;
};

/**
 * Header container of a Holy Grail layout.
 *
 * @remarks
 * - Fixed-height container
 * - Does not grow or shrink
 * - Arranges children horizontally
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0
});

/**
 * Footer container of a Holy Grail layout.
 *
 * @remarks
 * - Fixed-height container
 * - Does not grow or shrink
 * - Arranges children horizontally
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailFooter = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0
});

/**
 * Content container of a Holy Grail layout.
 *
 * Takes props of {@link HolyGrailContainerProps}.
 *
 * @remarks
 * - Expands to fill remaining available space
 * - Controls overflow behavior
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overflow"
})<HolyGrailContainerProps>(({ overflow }) => ({
  overflow: overflow ? "auto" : "hidden",
  flexGrow: 1
})) as FC<HolyGrailContainerProps>;

/**
 * Horizontal layout container within a Holy Grail layout.
 *
 * Takes props of {@link HolyGrailContainerProps}.
 *
 * @remarks
 * - Arranges children in a row
 * - Expands to fill available space
 * - Can optionally enable overflow scrolling
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overflow"
})<HolyGrailContainerProps>(({ overflow }) => ({
  overflow: overflow ? "auto" : "hidden",
  display: "flex",
  flexGrow: 1
})) as FC<HolyGrailContainerProps>;

/**
 * Vertical layout container within a Holy Grail layout.
 *
 * Takes props of {@link HolyGrailContainerProps}.
 *
 * @remarks
 * - Arranges children in a column
 * - Can optionally expand to fill available space
 * - Can optionally enable overflow scrolling
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overflow" && prop !== "expand"
})<HolyGrailContainerProps>(({ overflow, expand }) => ({
  overflow: overflow ? "auto" : "hidden",
  display: "flex",
  flexDirection: "column",
  flexGrow: expand ? 1 : 0
})) as FC<HolyGrailContainerProps>;

/**
 * Props for the {@link HolyGrail} component.
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
type HolyGrailProps = ComponentPropsWithRef<typeof Box> & {
  /**
   * Defines the primary layout direction:
   * - `"expand"` → vertical layout (top-to-bottom)
   * - `"contained"` → horizontal layout (left-to-right)
   *
   * @default `"expand"`
   */
  variant?: "expand" | "contained";
};

/**
 * Root layout container for building Holy Grail layouts.
 *
 * Takes props of {@link HolyGrailProps}.
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
 * The component spans the full viewport (`100% × 100%`) and prevents overflow
 * by default.
 *
 * All additional props are forwarded to the underlying MUI Box.
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
const HolyGrail = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "variant"
})<HolyGrailProps>(({ variant, theme }) => ({
  bgcolor: theme.palette.background.default,
  display: "flex",
  flexDirection: variant === "contained" ? "row" : "column",
  overflow: "hidden",
  height: "100%",
  width: "100%"
})) as FC<HolyGrailProps>;

export type { HolyGrailContainerProps, HolyGrailProps };

export {
  HolyGrailHeader,
  HolyGrailFooter,
  HolyGrailContent,
  HolyGrailRow,
  HolyGrailColumn,
  HolyGrail
};
