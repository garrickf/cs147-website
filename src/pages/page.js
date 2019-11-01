import React from 'react';
import { Flex } from 'rebass';
import Navbar from '../components/navbar';
import Splash from '../components/splash';
import Team from '../components/team';
import Background from '../components/background';
import AppInfo from '../components/app-info';
import Process from '../components/process';

export default () => (
  <Flex flexDirection='column' fontSize={[3, 4, 5]} fontFamily='body'>
    <Navbar />
    <Splash />
    <Team />
    <Background />
    <AppInfo />
    <Process />
  </Flex>
);
