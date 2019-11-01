import React from "react";
import { Flex, Text, Box, Heading, Card, Link } from "rebass";

const w1_slides = require("../assets/week1/slides.pdf");
const w2_slides = require("../assets/week2/slides.pdf");
const w3_slides = require("../assets/week3/slides.pdf");
const w4_slides = require("../assets/week4/slides.pdf");
const w5_slides = 's';

const w2_report = require("../assets/week2/report.pdf");
const w3_video = "https://youtu.be/ZqrLB-JMSMY";
const w4_report = require("../assets/week4/report.pdf");
const w5_readme = 's';
const w5_figma = 'https://www.figma.com/file/BvRzrnXRWqwSu9S4PM99Hl/sharewaves-med-fi?node-id=0%3A1';
const w5_prototype = 'https://www.figma.com/proto/BvRzrnXRWqwSu9S4PM99Hl/sharewaves?node-id=29%3A35&scaling=min-zoom';

const cards = [
  {
    title: "Week 1: Needfinding",
    image: "what",
    slides: w1_slides,
    writeup: null,
    other: []
  },
  {
    title: "Week 2: Needfinding II + Ideation",
    slides: w2_slides,
    writeup: w2_report,
    other: []
  },
  {
    title: "Week 3: Concept Video",
    slides: w3_slides,
    writeup: null,
    other: [
      {
        title: "Video",
        link: w3_video
      }
    ]
  },
  {
    title: "Week 4: Low Fi Prototype and Pilot Usability",
    slides: w4_slides,
    writeup: w4_report,
    other: []
  },
  {
    title: "Week 5: Med Fi Prototype",
    slides: w5_slides,
    writeup: null,
    other: [
      {
        title: "Med Fi README",
        link: w5_readme
      },
      {
        title: "Figma",
        link: w5_figma
      },
      {
        title: "⏯ Prototype",
        link: w5_prototype
      },
    ]
  }
];

export default () => {
  return (
    <Flex
      id="process"
      px={4}
      flexDirection="column"
      justifyContent="center"
      fontSize="5"
      sx={{
        height: "100vh"
      }}
    >
      <Box>
        <Heading fontSize="6" width={[1, 1, 1 / 3]}>
          Design process
        </Heading>
        <Text width={[1, 1, 3 / 5]}>Here's some stuff to look at!</Text>
      </Box>

      <Flex flexWrap="wrap" mx={-2}>
        {cards.map(card => (
          <Box width={1 / 3}>
            <Card m={2} height={300} fontSize='4'>
              <Heading>{card.title}</Heading>
              {card.slides ? <Link href={card.slides} target='__blank' pr={2}>[Slides]</Link> : null}
              {card.writeup ? <Link href={card.writeup} target='__blank' pr={2}>[Writeup]</Link> : null}
              {card.other.map(item => (
                <Link href={item.link} target='__blank' pr={2}>{`[${item.title}]`}</Link>
              ))}
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
