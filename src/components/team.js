import React from "react";
import { Flex, Text, Box, Heading, Image } from "rebass";

const splash = require('../assets/under-splash.png');
const garrick = require("../assets/garrick.jpg");
const gen = require("../assets/gen.jpg");
const grace = require("../assets/grace.jpg");
const team = [
  {
    img: garrick,
    name: "Garrick F.",
    blurb: "What is a blurb?"
  },
  {
    img: gen,
    name: "Gen S.",
    blurb: "What is a blurb?"
  },
  {
    img: grace,
    name: "Grace W.",
    blurb: "What is a blurb?"
  }
];

export default () => {
  return (
    <Flex
      id='team'
      px={4}
      backgroundColor="#555555"
      color='white'
      fontSize="5"
      alignItems={['flex-start', 'flex-start', 'center']}
      justifyContent={['center', 'center', 'flex-start']}
      flexDirection={['column', 'column', 'row']}
      sx={{
        height: ['150vh', '150vh', "100vh"],
      }}
    >
      <Box
        mx={-4}
        sx={{
          position: 'absolute',
          width: '100vw',
          height: ['150vh', '150vh', "100vh"],
          background: `url(${splash}) no-repeat right top`,
          backgroundSize: 'auto 50vh',
          mixBlendMode: 'color-burn',
        }}
      />
      <Box width={4/5} mb={5}>
        <Heading fontSize="6">
          Our team.
        </Heading>
        <Text width={[1, 1, 4/5]}>
          We built this project for CS 147 around the theme of Digital
          Democracy. Everyone did a little bit of everything.
        </Text>
      </Box>

      <Flex
        flexDirection={['column', 'column', 'row']}
        mb={5}
        sx={{
          zIndex: 1,
        }}
      >
        {team.map(member => (
          <Flex 
            px={[0, 0, 4]}
            mb={4}
            alignItems='center'
            flexDirection={['row', 'row', 'column']}
          >
            <Image
              pb={2}
              src={member.img}
              sx={{
                width: ["100px", "100px", "300px"],
                borderRadius: 999,
                filter: 'grayscale(100%)'
              }}
            />
            <Box
              px={3}
              sx={{
                width: '200px',
              }}
            >
              <Text textAlign='center'>{member.name}</Text>
              <Text textAlign='center' fontStyle='italic' fontSize='3'>{member.blurb}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
