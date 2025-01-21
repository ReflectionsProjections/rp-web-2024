import { Text, Center, Box, Button, HStack, Flex, useMediaQuery} from "@chakra-ui/react";
import { LandingButton} from "../../customTheme";
import '@fontsource/kufam';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/nunito';

import BackgroundImg from "/landing_page_bg.svg";

export function Landing() {
	const [isMedium] = useMediaQuery("(max-width: 850px)");
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isXSmall] = useMediaQuery("(max-width: 400px)");
	
	return ( 
		<Box 
			top={0}
			left={0}
			width="100%"
			height="100vh"
			minHeight="800px"
			bgImage={BackgroundImg}			
			bgSize="cover"
			bgPosition="center"
			bgRepeat="no-repeat">
			{/* <Box
    >
		  <Text variant="baseStyle">
        <Center h='200px' >
          <Text  font-family =  'Kufam'>reflections | projections </Text>
        </Center>
        <Text>September 18 - 22, 2024</Text>
        <VStack>
          <Button variant={"solid"}>LOGIN</Button>
          <Button variant={"solid"}>REGISTER</Button>
        </VStack>
		  </Text>
		</Box> */}

			<Flex direction="column" >
				<Center mt="12vh">
					<Box p='4' >
						<HStack justifyContent="center" spacing="8px" textAlign={"center"}>
							<Text fontSize={isXSmall ? "20" : isSmall ? "28" : isMedium ? "43" : "56"} fontFamily={"Roboto Slab"} fontWeight={"700"} letterSpacing={"0.08em"}> reflections </Text>
							<Text fontSize={isXSmall ? "52" : isSmall ? "60" : isMedium ? "76" : "120"} fontFamily={"Roboto Slab"} fontWeight={"300"} letterSpacing={"0.08em"} mt="-10px"> |</Text>
							<Text fontSize={isXSmall ? "20" : isSmall ? "28" : isMedium ? "43" : "56"} fontFamily={"Roboto Slab"} fontWeight={"700"} letterSpacing={"0.08em"}> projections </Text>
						</HStack>
						<Text fontSize={isXSmall ? "14" : isSmall ? "20" : isMedium ? "26" : "30" } whiteSpace="pre-line" fontFamily={"Nunito"} fontWeight={"400"}>September 18 - 22, 2024</Text>
					</Box>
				</Center>
				{/* <Center>
					<Text fontFamily="Kufam" fontSize="2xl" textAlign="center">
                    reflections | projections
					</Text>
				</Center>
				<Center>
					<Text fontSize="xl" textAlign="center">
                    September 18 - 22, 2024
					</Text>
				</Center> */}
				<Box/>
			</Flex>
			<Flex direction="column" align="center" justify="center">
				<Button as='a' href="https://bit.ly/rp2025application" style={LandingButton} backgroundColor="#FBC9B2" color="black" textTransform='none' mt='10vh' borderColor='black' _hover={{ backgroundColor: "#0A395E", color: "white", transform: "scale(1.02)", boxShadow: "xl", transition: "all 0.3s ease"}} >Join Our Team!</Button>
				{/* <VStack spacing={4} mt={4}> */}
				{/* <Button style={LandingButton} textTransform='none' borderColor='black'>Login</Button> */}
				{/* </VStack> */}
			</Flex>

		</Box>
	);
}
export default Landing;

