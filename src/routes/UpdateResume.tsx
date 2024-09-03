import { Box, Button, Center, FormLabel, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';
import { ResumeUpload } from "../components/Registration/inputs/ResumeUpload";
import { NavBar } from "../components/NavBar";

export default function UpdateResume() {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isShort] = useMediaQuery("(max-height: 735px)");
	const [userJwt, setUserJwt] = useState("");

	useEffect(() => {
		let jwt = localStorage.getItem("jwt");

		
		const urlSearchParams = new URLSearchParams(window.location.search);
		console.log("checking in params", urlSearchParams);
		window.history.pushState({}, document.title, "/");
		jwt = urlSearchParams.get("token");
		if (jwt) {
			localStorage.setItem("jwt", jwt);
			setUserJwt("jwt");
		}

	}, []);



	return (
		<>
			<NavBar showAuth={true} />
			<Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 15px)" bgRepeat="no-repeat" minH="100vh" minW="100vw" pt='1vh'>
				<Center minH='90vh' > 
					<>
						{userJwt ? (
							<VStack p='10vw' pt="80px" color='white'>
								<FormLabel textAlign='center' fontSize='2.5em' fontFamily='Kufam' fontWeight="900" htmlFor="resume"> Upload Your Resume: </FormLabel>
								<ResumeUpload id="resume" name="resume" />
								<Button bgColor={'#DD6D97'} variant='solid' onClick={() => window.location.href = '/'}>Submit</Button>
								<Text fontSize='1em' mt={10}>For your privacy and safety, please do NOT share this link with anyone else.</Text>
							</VStack>
						) : (
							<VStack color='white' fontFamily='Kufam'>
								<Text p={20} wordBreak={'break-word'} pb={10}>Hol' up! This ain't the 80s??</Text>
								<Text fontSize='1.3em' p={20} pt={0} wordBreak={'break-word'}>Please use the magic link emailed to you to re-upload your resume</Text>
							</VStack>
						)}
					</>
				</Center>
			</Box>
		</>
	);


}