import * as React from "react";
import { Box } from "@chakra-ui/react";

function UserIcon({fill}) {
  return (
    <Box
      as="svg"
      role="img"
      width="48px"
      height="48px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      mr="15px"
    >
      <path 
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </Box>
  

);
}

export default UserIcon;

