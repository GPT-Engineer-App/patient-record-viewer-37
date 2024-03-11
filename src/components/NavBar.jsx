import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex bg="brand.900" color="white" mb={4} p={4} align="center">
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold">
          Company Logo
        </Text>
      </Box>
      {}
    </Flex>
  );
};

export default NavBar;
