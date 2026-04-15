import { styled } from "@mui/material";

/**
 * Shared props for Holy Grail layout containers.
 *
 * @param overflow - Enables scrolling (`overflow: auto`) when `true`, otherwise `hidden`
 * @param expand - Allows the container to grow (`flex-grow`) when `true`
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
type ContainerProps = {
  overflow?: boolean;
  expand?: boolean;
};

/**
 * Header section of a Holy Grail layout.
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
const HolyGrailHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0
});

/**
 * Footer section of a Holy Grail layout.
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
const HolyGrailFooter = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0
});

/**
 * Main content container of a Holy Grail layout.
 *
 * @remarks
 * - Expands to fill remaining available space
 * - Controls overflow behavior
 *
 * @param overflow - Enables scrolling when `true`
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailContent = styled("div", {
  shouldForwardProp: (prop) => prop !== "overflow"
})<ContainerProps>(({ overflow }) => ({
  overflow: overflow ? "auto" : "hidden",
  flexGrow: 1
}));

/**
 * Horizontal layout container within a Holy Grail layout.
 *
 * @remarks
 * - Arranges children in a row
 * - Expands to fill available space
 * - Can optionally enable overflow scrolling
 *
 * @param overflow - Enables scrolling when `true`
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "overflow"
})<ContainerProps>(({ overflow }) => ({
  overflow: overflow ? "auto" : "hidden",
  display: "flex",
  flexGrow: 1
}));

/**
 * Vertical layout container within a Holy Grail layout.
 *
 * @remarks
 * - Arranges children in a column
 * - Can optionally expand to fill available space
 * - Can optionally enable overflow scrolling
 *
 * @param overflow - Enables scrolling when `true`
 * @param expand - Allows the column to grow (`flex-grow`)
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Layout
 * @author David Schummer
 * @author Simon Kovtyk
 */
const HolyGrailColumn = styled("div", {
  shouldForwardProp: (prop) => prop !== "overflow" && prop !== "expand"
})<ContainerProps>(({ overflow, expand }) => ({
  overflow: overflow ? "auto" : "hidden",
  display: "flex",
  flexDirection: "column",
  flexGrow: expand ? 1 : 0
}));

export { HolyGrailHeader, HolyGrailFooter, HolyGrailContent, HolyGrailRow, HolyGrailColumn };
