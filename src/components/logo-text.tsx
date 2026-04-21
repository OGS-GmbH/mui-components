import { SvgIcon } from "@mui/material";
import type { ComponentPropsWithRef } from "react";

/**
 * Props for the {@link LogoText} component.
 *
 * All props are forwarded to the underlying {@link SvgIcon}.
 *
 * @since 1.0.0
 * @category Components
 * @author Simon Kovtyk
 */
type LogoTextProps = Omit<ComponentPropsWithRef<typeof SvgIcon>, "children">;

/**
 * Text-only version of the logo.
 *
 * @remarks
 * This component renders only the textual part of the logo without the icon.
 * It can be used independently or combined with {@link Favicon}.
 *
 * Built on top of MUI's {@link SvgIcon}.
 *
 * @returns React Component
 *
 * @since 1.0.0
 * @category Components
 * @author Simon Kovtyk
 */
function LogoText({ ...props }: LogoTextProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 237 89">
        <path d="M167.6 36.4v46.8c-6.5 2.2-18.4 4.8-29.6 4.8-16.8 0-28.2-4.2-35.9-11.5-8-7.6-12.2-18.7-12.2-31C90 15.8 112.2.7 139.9.7c10.4 0 18.6 1.7 23.3 3.6L153.4 21c-3.6-.9-8-1.4-13.7-1.4-14.1 0-25.8 7.4-25.8 24.7 0 16 10.3 25.3 24.2 25.3 3.2 0 6.1-.3 7.2-.8V54.2h-11.2l10.4-17.8zM67.6 7.7 56.1 27.6c2.3 4.4 3.6 10.2 3.6 16.6 0 15.5-6.5 26.3-17.5 26.3s-18-9.9-18-26c0-15.7 7-26.1 17.8-26.1 3.6 0 6.7 1.2 9.3 3.3L61.5 4.3c-5.4-2.5-11.7-4-19-4C16.2.3 0 20.1 0 45.1c0 23.7 14.6 43.7 41.1 43.7C67.5 88.8 84 71.3 84 43.7c0-14.6-5.5-28-16.4-36M214 35.2c-10.8-3.9-15.4-5.7-15.4-10.1 0-3.8 3.8-6.4 10.8-6.4 5.3 0 9.7.9 13.3 2l9.6-16.5C226.8 1.8 219.5 0 209.7 0c-21.6 0-34.5 11.7-34.5 26.9 0 12.7 9.7 20.8 24.2 25.8 9.7 3.3 13.5 5.7 13.5 9.9 0 4.3-3.8 7-11.7 7-5 0-9.9-.9-14.1-2.2l-9.9 17c5.4 2.1 13.9 4 22.6 4 25.1 0 36.5-12.6 36.5-27.4 0-11.8-6.9-20.1-22.3-25.8" />
      </svg>
    </SvgIcon>
  );
}

export { LogoText };

export type { LogoTextProps };
