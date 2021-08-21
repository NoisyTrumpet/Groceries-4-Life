import { Box, Container, Text } from "@chakra-ui/react";
import * as React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box as="footer" bg="gradient" py={6}>
      <Container>
        <Text textAlign="center" color="primary" fontWeight="bold">
          Copyright Groceries4Life {currentYear}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
