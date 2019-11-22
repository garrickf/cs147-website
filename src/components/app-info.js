import React from "react";
import { Flex, Text, Box, Heading } from "rebass";

export default () => {
  return (
    <Flex
      id="app"
      px={4}
      flexDirection={["column", "column", "row"]}
      justifyContent="center"
      fontSize="5"
      sx={{
        height: "150vh"
      }}
    >
      <Box width={[1, 1, 3 / 5]}>
        <Heading fontSize="6" width={[1, 1, 1 / 3]}>
          How it works
        </Heading>
        <Text width={[1, 1, 3 / 5]}>
          Sharewaves works by changing as little of what you do as possible.
          Keep your news reading habits—we’ll log them and recommend actions for
          when you and those around you feel some kinda way.
        </Text>
      </Box>

      <Box width={[1, 1, 2 / 5]}>
        <video width="300" loop muted autoPlay>
          <source src={require("../assets/demo.mp4")} type="video/mp4" />
        </video>
      </Box>
    </Flex>
  );
};
