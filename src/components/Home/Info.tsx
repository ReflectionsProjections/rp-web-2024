import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import LandingText from '/landing_page_text.svg';
import '@fontsource/kufam';
// import BackgroundImg from "../../../landing_page_bg.svg";

export function Info() {
	return ( 
		<Box 
			top={0}
			left={0}
			width="100%"
			height="30vh"
			backgroundColor='#004970'
			display="flex"
			justifyContent="center"
		>
			<Box 
				width="90%"
				height="90%"
                margin='auto'
				bgImage={`url(${LandingText})`}
				bgSize="contain"
				bgPosition="center"
				bgRepeat="no-repeat"
				textAlign={"center"}
				display="flex"
				justifyContent="center"
				alignItems="baseline"
			>
				<VStack justifyContent="center" spacing="2px" textAlign={"center"} m="3%" maxWidth="70vw">
					<Text fontSize="1.2em" textColor='#16446A' fontFamily='kufam'>
                        Miss the 80's? Look no further because the Midwest’s largest student run tech-conference is bringing the raddest decade back!
					</Text>
					<Text fontSize="1.2em" textColor='#16446A' fontFamily='kufam'>
                        Join us for a week of insightful talks from industry & academia leaders, recruitment events by renowned companies, and more!
					</Text>

				</VStack>
			</Box>
			{/* <img src={LandingText} alt="Landing Page Background" style={{ margin: '5%' }} /> */}

		</Box>
	);
}

export default Info;