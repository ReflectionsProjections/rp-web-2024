import { Button, Input, Text, ChakraProvider, Box, Spacer, Stack, VStack, useToast } from "@chakra-ui/react";
import { customTheme } from "../customTheme";
import React from 'react';
import '/src/App.css';
import Config from "../config.ts"; 

export default function Hype () {
	const toast = useToast();
	const [email, setEmail] = React.useState('');
	const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setEmail(event.target.value);

	const handleClickToast = async () => {
		const promise = fetch(Config.BASE_URL + 'subscription', {
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
		});

        // Clear input field after submitting email address
        setEmail('');
	};

    // Handles "enter" keystroke
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleClickToast();
        }
    };

	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Box className="gradient" overflow="hidden">
					<VStack spacing='24px' alignItems="center">
						<Spacer />
						<Box className="spinning-container">
							<img
								src="/logo.png"
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
                    
						<Stack direction={['column', 'row']} spacing={['10px', '20px']} alignItems={['center', 'center']} marginBottom="40px">
							<Input type='email' borderColor="darkBlue" focusBorderColor="white" height={'50px'} width={['300px', '300px']} value={email} onChange={handleChange} onKeyDown={handleKeyDown} color="white" placeholder='Interested? Enter your email!' _placeholder={{ color: "white" }} size='lg' />
							<Button variant={"solid"} onClick={() => { handleClickToast(); }}>
                            Submit
							</Button>
						</Stack>
					</VStack>
				</Box>
			</ChakraProvider>
		</>
	);
} 