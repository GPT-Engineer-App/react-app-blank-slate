import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("https://api.color.pizza/v1/?values=30");
      const data = await response.json();
      setColors(data.colors);
    };

    fetchColors();
  }, []);

  return (
    <Box>
      <Heading mb={8}>Random Colors</Heading>
      <SimpleGrid columns={5} spacing={4}>
        {colors.map((color) => (
          <Box key={color.hex} bg={`#${color.hex}`} p={4} borderRadius="md">
            <Heading size="sm" color="white">
              {color.name}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
