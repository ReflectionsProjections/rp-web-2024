import { Button, Input, Text, ChakraProvider, Box, Spacer, HStack, VStack, useToast } from "@chakra-ui/react";
import { customTheme } from "../customTheme";
import React from 'react';
import '/src/App.css';

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
                <VStack spacing='24px' alignItems="center">
                <Spacer />
                    <Box className="spinning-container">
                        <img
                            src="/src/assets/logo.png"
                            alt="Spinning Image"
                            className="rotate hype-img"
                        />
                    </Box>
                    <Box textAlign="center">
                        <Text textStyle="header" fontSize='6xl'>reflections | projections</Text>
                    </Box>
                    <Text textStyle="header">2024</Text>
                    <Spacer/>
                    <Text textStyle="footer">Coming Soon!</Text>
                    
                    <HStack spacing='24px'>
                        <Input type='email'borderColor="darkBlue" focusBorderColor="white" height={'50px'} width={'100%'} value={email} onChange={handleChange} color="white" placeholder='Interested? Enter your email!' _placeholder = {{color: "white"}} size='lg' />
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
