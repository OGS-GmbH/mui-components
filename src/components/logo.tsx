import { SvgIcon } from "@mui/material";
import { orange, petrol } from "@ogs-gmbh/mui-theme";
import type { ComponentPropsWithRef } from "react";
import { mergeSx } from "../props.js";
import type { LogoIconSlotProps } from "./logo-icon.js";

/**
 * Props for the {@link Logo} component.
 *
 * @param slotProps - Optional customization for individual SVG paths
 *
 * @since 1.1.0
 * @category Components
 * @author Simon Kovtyk
 */
type LogoProps = Partial<{
  slotProps: LogoIconSlotProps & Partial<{ text: ComponentPropsWithRef<"path"> }>;
}> &
  ComponentPropsWithRef<typeof SvgIcon>;

/**
 * Full logo component combining icon and text.
 *
 * @remarks
 * This component renders the complete logo, including:
 *
 * - Icon (outer + inner paths)
 * - Text
 *
 * Use {@link LogoIcon} or {@link LogoText} if only parts of the logo are required.
 *
 * The logo is built on top of MUI's {@link SvgIcon} and supports full customization
 * via `slotProps`.
 *
 * @param slotProps - Allows overriding props for individual SVG parts:
 * - `outerPath` → outer icon shape
 * - `innerPath` → inner icon shape
 * - `text` → text path
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Components
 * @author Simon Kovtyk
 */
function Logo({ slotProps, sx, ...props }: LogoProps) {
  return (
    <SvgIcon
      sx={[
        {
          width: "unset",
          height: "unset"
        },
        ...mergeSx(sx)
      ]}
      {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 341 94">
        <path
          fill={petrol[400]}
          {...slotProps?.text}
          d="M271.5 38.8v46.8c-6.5 2.2-18.4 4.8-29.6 4.8-16.8 0-28.2-4.2-35.9-11.5-8-7.6-12.2-18.7-12.2-31 .1-29.7 22.3-44.8 50-44.8 10.4 0 18.6 1.7 23.3 3.6l-9.8 16.7c-3.6-.9-8-1.4-13.7-1.4-14.1 0-25.8 7.4-25.8 24.7 0 16 10.3 25.3 24.2 25.3 3.2 0 6.1-.3 7.2-.8V56.6H238l10.4-17.8zm-100-28.7L160 30c2.3 4.4 3.6 10.2 3.6 16.6 0 15.5-6.5 26.3-17.5 26.3s-18-9.9-18-26c0-15.7 7-26.1 17.8-26.1 3.6 0 6.7 1.2 9.3 3.3l10.2-17.4c-5.4-2.5-11.7-4-19-4-26.3 0-42.5 19.8-42.5 44.8 0 23.7 14.6 43.7 41.1 43.7 26.4 0 42.9-17.5 42.9-45.1 0-14.6-5.5-28-16.4-36m146.4 27.5c-10.8-3.9-15.4-5.7-15.4-10.1 0-3.8 3.8-6.4 10.8-6.4 5.3 0 9.7.9 13.3 2l9.6-16.5c-5.5-2.4-12.8-4.2-22.6-4.2-21.6 0-34.5 11.7-34.5 26.9 0 12.7 9.7 20.8 24.2 25.8 9.7 3.3 13.5 5.7 13.5 9.9 0 4.3-3.8 7-11.7 7-5 0-9.9-.9-14.1-2.2l-9.9 17c5.4 2.1 13.9 4 22.6 4 25.1 0 36.5-12.6 36.5-27.4 0-11.8-6.9-20.1-22.3-25.8"
        />
        <g>
          <path
            fill={orange[400]}
            {...slotProps?.outerPath}
            d="M25.2 75.7a36.4 36.4 0 0 1-14.6-29c0-20 16.3-36.2 36.2-36.2 5.1 0 9.9 1.1 14.3 3l5.3-9.2C60.4 1.5 53.8 0 46.8 0a46.71 46.71 0 0 0-27 84.9z"
          />
          <path
            fill={orange[400]}
            {...slotProps?.outerPath}
            d="m73 8-5.3 9.2C77 23.7 83 34.5 83 46.7c0 20-16.3 36.2-36.2 36.2-5.4 0-10.5-1.2-15.1-3.3l-5.3 9.2c6.2 3 13.1 4.7 20.4 4.7 25.8 0 46.8-21 46.8-46.8C93.6 30.6 85.4 16.4 73 8"
          />
        </g>
        <g>
          <path
            fill={petrol[400]}
            {...slotProps?.innerPath}
            d="M30.8 43.8c1.4-7.6 8-13.4 16-13.4s14.7 5.8 16 13.4h10.7c-1.4-13.4-12.9-24-26.7-24s-25.2 10.5-26.7 24z"
          />
          <path
            fill={petrol[400]}
            {...slotProps?.innerPath}
            d="M62.4 51.4c-2 6.7-8.2 11.6-15.6 11.6s-13.6-4.9-15.6-11.6H20.4a26.85 26.85 0 0 0 26.4 22.2C60 73.6 71 64 73.2 51.4z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export { Logo };
