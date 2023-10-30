import React from "react";
import { IconProps } from "@/app/Interfaces/InterfaceIcons";

const MenuIcon : React.FC<IconProps> = ({
    width = 17,
    height = 14,
    ...props
  }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 17 14"
    width={width}
    height={height}
    {...props}
  >
    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
  </svg>
)
export default MenuIcon;
