import React from 'react';
import { Flex, Text, Box, Heading } from 'rebass';

const splash = require('../assets/splash.png');

export default () => {
  return (
    <Flex
      px={4}
      flexDirection='column'
      justifyContent='center'
      fontSize={5}
      sx={{
        height: '100vh',
        background: `url(${splash}) no-repeat right top`,
        backgroundSize: 'auto 100vh'
      }}
    >
      <Box>
        <Heading fontSize={6} width={[1, 1, 1 / 3]}>
          See the change. Be the change.
        </Heading>
        <Text width={[1, 1, 3 / 5]}>
          We get it, you read the news a normal amount. Podcasts, TV, whatever.
          We’re not here to change any of that. We’re here to scratch that itch
          when you see things that make you wanna act.
        </Text>
      </Box>
    </Flex>
  );
};
