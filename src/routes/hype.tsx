import { Button, Input, Text, ChakraProvider, Box, Spacer, HStack, VStack, useToast } from "@chakra-ui/react";
import React from 'react';
import '/src/App.css';
import { customTheme } from "../customTheme";

export default function Hype () {
    const toast = useToast()
    const [email, setEmail] = React.useState('')
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setEmail(event.target.value)

    const handleClickToast = async () => {
          const promise = fetch('http://18.119.140.95:3000/subscription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email':email,
                'mailingList':'rp_interest'
            }),
          });
          toast.promise(promise,{
            success: { title: 'Success!', description: 'You\'ve been added :)' },
            error: { title: 'Oops!', description: 'Something went wrong - please try again' },
            loading: { title: 'Reflections | Projections', description: 'Please wait' },
          })
      };

	return (
    <>
        <ChakraProvider theme={customTheme}>
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
                        <Input type='email' value={email} onChange={handleChange} 
                          color='white' variant="outline" 
                          placeholder='Enter your email!' _placeholder={{color: 'white' }}
                          size='lg' />
                        <Button color='white' borderColor='white' variant='outline' size='lg' onClick={() => {handleClickToast();}}>
                            Submit
                        </Button>
                    </HStack>
                </VStack>
            </div>
        </ChakraProvider>
		</>
	);
} 

