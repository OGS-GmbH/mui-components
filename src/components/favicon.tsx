import { SvgIcon } from "@mui/material";
import type { ComponentProps, ComponentPropsWithRef } from "react";

/**
 * Slot props for customizing parts of the favicon.
 *
 * @param outerPath - Props applied to the outer SVG path
 * @param innerPath - Props applied to the inner SVG path
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type FaviconSlotProps = Partial<{
  outerPath: ComponentPropsWithRef<"path">;
  innerPath: ComponentPropsWithRef<"path">;
}>;

/**
 * Props for the {@link Favicon} component.
 *
 * @param slotProps - Optional customization for SVG paths:
 * - `outerPath`
 * - `innerPath`
 *
 * @since 1.0.0
 * @category Components
 * @author Simon Kovtyk
 */
type FaviconProps = Partial<{
  slotProps: FaviconSlotProps;
}> &
  Omit<ComponentProps<typeof SvgIcon>, "children">;

/**
 * Icon-only version of the logo.
 *
 * @remarks
 * This component renders only the graphical part of the logo without text.
 *
 * Built on top of MUI's {@link SvgIcon}.
 *
 * The icon is composed of:
 *
 * - `outerPath` → circular outer shape
 * - `innerPath` → inner symbol
 *
 * @param slotProps - Allows overriding props for individual SVG paths
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Components
 * @author Simon Kovtyk
 */
function Favicon({ slotProps, ...props }: FaviconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 94 94">
        <path
          {...slotProps?.outerPath}
          d="M25.2 75.7a36.4 36.4 0 0 1-14.6-29c0-20 16.3-36.2 36.2-36.2 5.1 0 9.9 1.1 14.3 3l5.3-9.2C60.4 1.5 53.8 0 46.8 0a46.71 46.71 0 0 0-27 84.9zM73 8l-5.3 9.2C77 23.7 83 34.5 83 46.7c0 20-16.3 36.2-36.2 36.2-5.4 0-10.5-1.2-15.1-3.3l-5.3 9.2c6.2 3 13.1 4.7 20.4 4.7 25.8 0 46.8-21 46.8-46.8C93.6 30.6 85.4 16.4 73 8"
        />
        <path
          {...slotProps?.innerPath}
          d="M30.8 43.8c1.4-7.6 8-13.4 16-13.4s14.7 5.8 16 13.4h10.7c-1.4-13.4-12.9-24-26.7-24s-25.2 10.5-26.7 24zM62.4 51.4c-2 6.7-8.2 11.6-15.6 11.6s-13.6-4.9-15.6-11.6H20.4a26.85 26.85 0 0 0 26.4 22.2C60 73.6 71 64 73.2 51.4z"
        />
      </svg>
    </SvgIcon>
  );
}

export { Favicon };

export type { FaviconProps, FaviconSlotProps };
