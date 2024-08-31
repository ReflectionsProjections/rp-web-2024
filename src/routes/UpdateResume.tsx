import { Box, Center, FormLabel, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';
import { ResumeUpload } from "../components/Registration/inputs/ResumeUpload";

export default function UpdateResume() {
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isShort] = useMediaQuery("(max-height: 735px)");
	const [userJwt, setUserJwt] = useState("");

	useEffect(() => {
		let jwt = localStorage.getItem("jwt");

		
		const urlSearchParams = new URLSearchParams(window.location.search);
		console.log("checking in params", urlSearchParams);
		window.history.pushState({}, document.title, "/");
		jwt = urlSearchParams.get("jwt");
		if (jwt) {
			localStorage.setItem("jwt", jwt);
			setUserJwt("jwt");
		}

	}, []);



	return (
		<Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 15px)" bgRepeat="no-repeat" minH="100vh" minW="100vw" pt='1vh'>
			<Center minH='90vh' > 
				<>
					{userJwt ? (
						<VStack p='10vw'>
							<FormLabel textAlign='center' fontSize='3em' fontFamily='Kufam' fontWeight="900" htmlFor="resume"> Upload your resume: </FormLabel>
							<ResumeUpload id="resume" name="resume" />
						</VStack>
					) : (
						<VStack color='white'>
							<Text>Unauthorized</Text>
							<p>You are not authorized to view this page.</p>
						</VStack>
					)}
				</>
			</Center>
		</Box>
	);


}