import { Button, Input, Text, ChakraProvider, Box, Spacer, HStack, VStack, useToast } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React, { useState } from 'react';
import '/src/App.css';

const theme = extendTheme({
    textStyles: {
      h1: {
        fontSize: ['48', '72px'],
        lineHeight: '110%',
        letterSpacing: '-2%',
        color:"white",
        fontFamily:"Kufam",
        top:"20%",
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
        fontFamily:"Kufam",
        padding:10,

      },
    },
  })

export default function Home () {
    const toast = useToast()
    const [email, setEmail] = React.useState('')
    const handleChange = (event) => setEmail(event.target.value)

    const handleClickToast = async () => {
        try {
            console.log(email)
          const response = await fetch('http://18.119.140.95:3000/subscription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email':email,
                'mailingList':'rp_interest'
            }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          toast({
            title: 'Sucess!',
            description: 'You have been added to the R|P mailing list',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
        //   console.error('Error fetching data:', error);
          toast({
            title: 'Sorry try again',
            description: 'An error occurred while adding you.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      };

	return (
		<>
        <ChakraProvider theme={theme}>
            <div className='gradient'>
                <VStack spacing='24px'>
                <Spacer />
                    <Text textStyle="h1" fontSize='6xl'>Reflections | Projections 2024</Text>
                    <Spacer/>
                    <Box w="400px" h="400px" position="relative" className="spinning-container">
                        <img
                            src="/src/assets/logo.png"
                            alt="Spinning Image"
                            className="rotate hype-img"
                        />
                    </Box>
                    <Text textStyle="h1" fontSize='4xl'>Coming Soon!</Text>
                    <Spacer/>
                    <HStack spacing='24px'>
                        <Input type='email' value={email} onChange={handleChange} color="white" variant="filled" placeholder='Enter your email!' size='lg' />
                        <Button variant={"solid"} onClick={() => {handleClickToast();}}>
                            Submit
                        </Button>
                    </HStack>
                </VStack>
            </div>
        </ChakraProvider>
		</>
	);
} 

