import { Box, Flex, Image, Text, Stack, VStack } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
// import { getPoints } from "../api/getPoints";

import { Center, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import PrizeSVG from "../components/myRP/prizesMap";
import { NavBar } from "../components/NavBar";
import VerticalProgressBar from "../components/VerticalProgressBar";
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';
import Config from "../config";



function myRP() {
	const [userPoints, setUserPoints] = useState(0); // Initialize points to 0
    
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isShort] = useMediaQuery("(max-height: 735px)");

	useEffect(() => {
		const jwt = localStorage.getItem("jwt");

		if (!jwt) {
			window.location.href = "/auth";
			return;
		}

		const jwt_decoded = jwtDecode(jwt);
		const isStaleJwt = Date.now() > (jwt_decoded["exp"]! * 1000);

		if (isStaleJwt) {
			localStorage.removeItem("jwt");
			window.location.href = "/auth";
			return;
		}

		const fetchUserPoints = async () => {
			try {
				const response = await axios.get(Config.API_BASE_URL+'attendee/points/', {
					headers: {
						Authorization: jwt
					}
				});
				setUserPoints(response.data.points);
			} catch (error) {
				console.error("Error fetching points for user:", error);
				window.alert("You need to register before you can view your profile!");
				window.location.href="/register";
			}
		};

		fetchUserPoints(); // Fetch points when component mounts
	}); // Run effect when token changes

	return (
		<>
			<NavBar showAuth={true} />
			<Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 15px)" bgRepeat="no-repeat" minH="800px" height='100vh' minW="100vw" pt='1vh' fontFamily='Kufam'>
				<Center minH='90vh'>
					<VStack spacing={6} align="center" mt='75px'>
						<Flex align="center" justify="center">
							<Text fontSize="2xl" color="white" mr={2}>
                                Your Points:
							</Text>
							<Image src="/pixel.png" boxSize="30px" mr={2} />
							<Text fontSize="3xl" color="yellow.400">
								{userPoints}
							</Text>
						</Flex>
						<Text fontSize="lg" color="white" mb="10vh" m={10} mt={4}>
                            Attend events to earn points and unlock prizes!
						</Text>
						<Flex width="100%" justify="space-around" flexDirection={isSmall ? 'row' : 'column'} alignItems={'center'}>
							<Stack spacing={isSmall ? 3 : '10vw'} direction={isSmall? 'column': 'row-reverse'} alignItems={'center'} mb={-20}> 
								<Flex align="center" direction={isSmall ? 'row' : 'column'}>
									<PrizeSVG prizeNum={3} attendeePoints={userPoints} />
									<Image src="/pixel.png" boxSize="30px" mx={2} mt={2}/>
									<Text fontSize="lg" color="white">
                                        x50
									</Text>
								</Flex>
								<Flex align="center" direction={isSmall ? 'row' : 'column'}>
									<PrizeSVG prizeNum={2} attendeePoints={userPoints} />
									<Image src="/pixel.png" boxSize="30px" mx={2} mt={2}/>
									<Text fontSize="lg" color="white">
                                        x35
									</Text>
								</Flex>
								<Flex align="center" direction={isSmall ? 'row' : 'column'}>
									<PrizeSVG prizeNum={1} attendeePoints={userPoints} />
									<Image src="/pixel.png" boxSize="30px" mx={2} mt={2}/>
									<Text fontSize="lg" color="white">
                                        x20
									</Text>
								</Flex>
							</Stack>
							<VerticalProgressBar userPoints={userPoints} isMobile={isSmall} />
						</Flex>
					</VStack>
				</Center>
			</Box>
		</>
	);
}

export default myRP;