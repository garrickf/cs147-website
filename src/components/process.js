import React from "react";
import { Flex, Text, Box, Heading, Card, Link } from "rebass";

const w1_slides = require("../assets/week1/slides.pdf");
const w2_slides = require("../assets/week2/slides.pdf");
const w3_slides = require("../assets/week3/slides.pdf");
const w4_slides = require("../assets/week4/slides.pdf");
const w5_slides = require("../assets/week5/slides.pdf");
const w9_slides = require("../assets/week9/slides.pdf");

const w1_slides_ppt = require("../assets/week1/slides.pptx");
const w2_slides_ppt = require("../assets/week2/slides.pptx");
const w3_slides_ppt = require("../assets/week3/slides.pptx");
const w4_slides_ppt = require("../assets/week4/slides.pptx");
const w5_slides_ppt = require("../assets/week5/slides.pptx");
const w9_slides_ppt = require("../assets/week9/slides.pptx");

const w2_report = require("../assets/week2/report.pdf");
const w3_video = "https://youtu.be/ZqrLB-JMSMY";
const w3_video_dl = require("../assets/week3/concept-video.mp4");
const w4_report = require("../assets/week4/report.pdf");
const w5_readme = require("../assets/week5/readme.pdf");
const w5_figma = 'https://www.figma.com/file/BvRzrnXRWqwSu9S4PM99Hl/sharewaves-med-fi?node-id=0%3A1';
const w5_prototype = 'https://www.figma.com/proto/BvRzrnXRWqwSu9S4PM99Hl/sharewaves?node-id=29%3A35&scaling=min-zoom';
const w7_he = require('../assets/week7/he.pdf');
const w10_report = require("../assets/week10/report.pdf");
const w10_readme = require("../assets/week10/readme.pdf");
const w10_github = "https://github.com/garrickf/sharewaves";

const cards = [
  {
    title: "Week 1: Needfinding",
    image: "what",
    slides: w1_slides,
    slidesPPT: w1_slides_ppt,
    writeup: null,
    other: []
  },
  {
    title: "Week 2: Needfinding II + Ideation",
    slides: w2_slides,
    slidesPPT: w2_slides_ppt,
    writeup: w2_report,
    other: []
  },
  {
    title: "Week 3: Concept Video",
    slides: w3_slides,
    slidesPPT: w3_slides_ppt,
    writeup: null,
    other: [
      {
        title: "Watch Video",
        link: w3_video
      },
      {
        title: "Download Video",
        link: w3_video_dl
      }
    ]
  },
  {
    title: "Week 4: Low Fi Prototype and Pilot Usability",
    slides: w4_slides,
    slidesPPT: w4_slides_ppt,
    writeup: w4_report,
    other: []
  },
  {
    title: "Week 5: Med Fi Prototype",
    slides: w5_slides,
    slidesPPT: w5_slides_ppt,
    writeup: null,
    other: [
      {
        title: "Readme",
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
  },
  {
    title: "Week 6-7: Heuristic Evals",
    slides: null,
    writeup: null,
    other: [
      {
        title: "Heuristic Evals (PDF)",
        link: w7_he
      },
    ]
  },
  {
    title: "Week 8-9: Hi Fi Midway Progress",
    slides: w9_slides,
    slidesPPT: w9_slides_ppt,
    writeup: null,
    other: []
  },
  {
    title: "Week 10: Hi Fi Prototype",
    slides: null,
    writeup: w10_report,
    other: [
      {
        title: "Readme",
        link: w10_readme,
      },
      {
        title: "Code (GitHub)",
        link: w10_github,
      }
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
    >
      <Box>
        <Heading fontSize="6" width={[1, 1, 1 / 3]}>
          Design process
        </Heading>
        <Text width={[1, 1, 3 / 5]}>Here's some stuff to look at!</Text>
      </Box>

      <Flex flexWrap="wrap" mx={-2}>
        {cards.map(card => (
          <Box width={[1, 1/2, 1/3]}>
            <Card m={2} height={300} fontSize='4'>
              <Heading>{card.title}</Heading>
              {card.slides ? <Link href={card.slides} target='__blank' pr={2}>Slides (PDF)</Link> : null}
              {card.slides ? <Link href={card.slidesPPT} target='__blank' pr={2}>Slides (PPTX)</Link> : null}
              {card.writeup ? <Link href={card.writeup} target='__blank' pr={2}>Writeup</Link> : null}
              {card.other.map(item => (
                <Link href={item.link} target='__blank' pr={2}>{`${item.title}`}</Link>
              ))}
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
