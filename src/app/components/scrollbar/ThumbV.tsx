import { forwardRef, HTMLProps } from "react";

import { colors } from "../../../utils/colors";

export const ThumbV = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ style, className }, ref) => {
    const custom = { backgroundColor: colors.primaryPeach, width: "3px" };

    return (
      <div style={{ ...style, ...custom }} className={className} ref={ref} />
    );
  }
);
