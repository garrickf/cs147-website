import React from "react";
import { Flex, Text, Box, Heading } from "rebass";

const gif1 = require('../assets/sharewave-1.gif')
const gif2 = require('../assets/sharewave-2.gif')

export default () => {
  return (
    <>
      <Flex
        id='background'
        px={4}
        flexDirection="column"
        justifyContent="center"
        fontSize="5"
        backgroundColor="black"
        color="white"
        sx={{
          height: "100vh",
          // background: `url(${gif1}) no-repeat calc(100vw - 494px) center`,
          backgroundSize: 'auto 50vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box>
          <Heading fontSize="6" width={[1, 1, 1 / 3]}>
            The problem.
          </Heading>
          <Text width={[1, 1, 3 / 5]}>
            Online communities, discourse, and news divide and isolate people,
            leaving them feeling hopeless, unenergized, and without clear ways
            to participate in politics.
          </Text>
        </Box>
      </Flex>
      <Flex
        px={4}
        flexDirection="column"
        justifyContent="center"
        fontSize="5"
        sx={{
          height: "100vh",
          background: `url(${gif2}) no-repeat calc(100vw - 600px) center`,
          backgroundSize: 'auto 50vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box>
          <Heading fontSize="6" width={[1, 1, 1 / 3]}>
            The solution.
          </Heading>
          <Text width={[1, 1, 3 / 5]}>
            We provide a platform for people to rally around stories they care
            about, see people like them, and <i>get offline</i>—sparking political
            conversation and action in their communities.
          </Text>
        </Box>
      </Flex>
    </>
  );
};
