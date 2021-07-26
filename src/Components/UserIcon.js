import * as React from "react";
import { Box } from "@chakra-ui/react";

// took the svg properties from the provided files to create a compatible component for Chakra UI
function UserIcon({fill}) {
  return (
    <Box
      as="svg"
      role="img"
      width="48px"
      height="48px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      // passes through fill prop that's used to conditionally render icon colors based off of the user's role
      fill={fill}
      mr="15px"
    >
      <path 
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </Box>
  

);
}

export default UserIcon;

