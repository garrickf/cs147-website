import React from 'react';
import { Flex, Text, Box, Link } from 'rebass';

export default () => {
    return (
        <Flex
            px={4}
            backgroundColor='white'
            alignItems='center'
            sx={{
                position: 'fixed',
                width: '100vw',
                height: '70px',
                zIndex: '999',
                // mixBlendMode: 'screen', // Note: this is cool
            }}
        >
            <Text fontSize='4' fontWeight='bold'>sharewaves</Text>
            <Box mx='auto' />
            <Link variant='nav' fontSize='3' pl={4} href='#team'>Team</Link>
            <Link variant='nav' fontSize='3' pl={4} href='#background'>Background</Link>
            <Link variant='nav' fontSize='3' pl={4} href='#app'>App</Link>
            <Link variant='nav' fontSize='3' pl={4} href='#process'>Process</Link>
        </Flex>
    );
}
