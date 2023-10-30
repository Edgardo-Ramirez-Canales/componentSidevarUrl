import React from "react";
import { IconProps } from "@/app/Interfaces/InterfaceIcons";

const QuestionIcon:  React.FC<IconProps> = ({
    width = 20,
    height = 20,
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
      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 16a1 1 0 1 1 0-2.001A1 1 0 0 1 10 16Zm1-4.534V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
    />
  </svg>
)
export default QuestionIcon;