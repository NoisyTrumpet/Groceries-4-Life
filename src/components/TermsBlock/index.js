import { Box, Heading, Container } from "@chakra-ui/react";
import * as React from "react";

const TermsBlock = ({ content }) => {
  return (
    <Box>
      {content.map((item) => (
        <Box>
          <Box bg="primary" color="white" py="8">
            <Heading as="h2" textAlign="center">
              {item.title}
            </Heading>
          </Box>
          <Container py="8">
            <Box
              dangerouslySetInnerHTML={{ __html: item.text.html }}
              sx={{ h6: { marginTop: 4 } }}
            />
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default TermsBlock;
