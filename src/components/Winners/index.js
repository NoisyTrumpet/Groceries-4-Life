import { Box, Heading, Text } from "@chakra-ui/react";
import Logo from "SVG/index";
import React from "react";

const Winners = () => {
  return (
    <Box>
      <Box display={`grid`} gridTemplateColumns={[`100%`, `repeat(2, 50%)`]}>
        <Box
          bg="#e39c36"
          padding={12}
          display={`grid`}
          placeItems={`center`}
          sx={{
            svg: {
              maxWidth: "80%",
              height: "auto",
            },
          }}
          order={[2, 1]}
        >
          <Logo title="Gas & Groceries for Life | Presented by Thomas J. Henry" />
        </Box>
        <Box
          bg="#54141b"
          display={`flex`}
          placeItems={`center`}
          textAlign={`center`}
          flexDirection={`column`}
          justifyContent={`center`}
          gap={4}
          order={[1, 2]}
          padding={[8, 0]}
        >
          <Box
            // After border centering 80% width
            height={`100%`}
            display="grid"
            placeItems="center"
            borderBottom={`3px solid #e39c36`}
            pb={[4, 0]}
          >
            <div>
              <Heading as="h3" color="textColor" fontWeight={800}>
                Jean Ogden
              </Heading>
              <Text color="white" fontWeight={600}>
                San Antonio, TX
              </Text>
            </div>
          </Box>
          <Box height={`100%`} display="grid" placeItems="center">
            <div>
              <Heading as="h3" color="textColor" fontWeight={800}>
                Daniel Stevens
              </Heading>
              <Text color="white" fontWeight={600}>
                Austin, TX
              </Text>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Winners;
