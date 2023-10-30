import React from "react";
import { IconProps } from "@/app/Interfaces/InterfaceIcons";

const NotificationIcon: React.FC<IconProps> = ({
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
            d="M16.11 11.086V9.191c.001-1.28-.486-2.524-1.384-3.529-.897-1.005-2.152-1.713-3.56-2.01a.896.896 0 0 0 .024-.111V1.053a.995.995 0 0 0-.348-.745A1.274 1.274 0 0 0 10 0c-.316 0-.619.11-.842.308a.995.995 0 0 0-.349.745V3.54a.894.894 0 0 0 .025.112c-1.409.296-2.663 1.004-3.56 2.01C4.375 6.667 3.887 7.91 3.888 9.19v1.895c0 2.512-2.222 3.14-2.222 4.395 0 .624 0 1.256.64 1.256h15.386c.64 0 .64-.632.64-1.256 0-1.256-2.222-1.883-2.222-4.395ZM6.218 17.79a3.781 3.781 0 0 0 1.515 1.607C8.405 19.79 9.193 20 10 20c.806 0 1.594-.21 2.267-.603a3.781 3.781 0 0 0 1.515-1.608H6.218Z"
        />
    </svg>
)
export default NotificationIcon;