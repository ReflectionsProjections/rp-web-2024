import { Box, Text, VStack, useMediaQuery } from '@chakra-ui/react';
import '@fontsource/kufam';
import InfoDecor from '/Info/info_decor.svg';
import LandingTextBox from '/Info/landing_page_textbox.svg';
import LandingTextBoxSM from '/Info/landing_page_textbox_sm.svg';

export function Info() {
	const [isSmall] = useMediaQuery("(max-width: 600px)");

	return ( 
		<Box 
			top={0}
			left={0}
			width="100%"
			minHeight="35vh"
			backgroundColor='#004970'
			display="flex"
			justifyContent="flex-start"
			alignItems="flex-start"
			alignContent={"space-between"}
			flexWrap={"wrap"}

		>
			<Box
				width="15vw"
				height="15vw"
				maxHeight="150px"
				minHeight={"100px"}
				minWidth={"100px"}
				position="absolute"
				bgImage={InfoDecor}
				bgSize="100% 100%"
				bgRepeat="no-repeat"
				transform={"translate(2vw, -50px)"}
			/>
			<Box 
				width={isSmall ? "95%" : "90%"}
				height="90%"
				minHeight='200px'
				margin='auto'
				bgImage={isSmall ? LandingTextBoxSM: LandingTextBox}
				bgSize="100% 100%"
				// bgPosition="center"
				bgRepeat="no-repeat"
				textAlign="center"
				display="flex"
				justifyContent="center"
				// alignItems="center"
				py={4}
			>
				<VStack justifyContent="center" spacing="2px" textAlign={"center"} m="3%" mb={isSmall ? "6.5vh" : "12vh"} maxWidth="70vw">
					<Text fontSize="1.4em" textColor='#16446A' fontFamily='kufam'>
                        Miss the 80's? Look no further because the Midwest’s largest student run tech-conference is bringing the raddest decade back! Join us for a week of insightful talks from industry & academia leaders, recruitment events by renowned companies, and more!
					</Text>
					{/* <Text fontSize="1.2em" textColor='#16446A' fontFamily='kufam'>
                        Join us for a week of insightful talks from industry & academia leaders, recruitment events by renowned companies, and more!
					</Text> */}

				</VStack>
			</Box>
			{/* <img src={LandingText} alt="Landing Page Background" style={{ margin: '5%' }} /> */}

		</Box>
	);
}

export default Info;