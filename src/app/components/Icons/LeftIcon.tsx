import React from "react";
import { IconProps } from "@/app/Interfaces/InterfaceIcons";

const LeftIcon: React.FC<IconProps> = ({
    width = 12,
    height = 12,
    ...props
  }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M6.015 9.5c-.318 0-.624-.123-.849-.341l-4.8-4.657a1.135 1.135 0 0 1-.015-1.66 1.203 1.203 0 0 1 .86-.342 1.232 1.232 0 0 1 .852.355L6.015 6.69l3.951-3.834c.227-.212.53-.329.844-.326.315.002.616.125.838.34.223.216.35.509.352.814.003.305-.118.6-.337.819l-4.8 4.657c-.225.218-.53.34-.848.341Z"
    />
  </svg>
)
export default LeftIcon;