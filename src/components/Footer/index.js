import { Box, Container, Text } from "@chakra-ui/react";
import * as React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box as="footer" bg="gradient" py={6}>
      <Container>
        <Text textAlign="center" color="primary" fontWeight="bold">
          ©️ {currentYear} Groceries 4 Life All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
