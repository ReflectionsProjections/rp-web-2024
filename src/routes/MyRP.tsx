import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
// import { getPoints } from "../api/getPoints";

import { Button, Center, FormLabel, useMediaQuery } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { ResumeUpload } from "../components/Registration/inputs/ResumeUpload";
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';
import PrizeSVG from "../components/myRP/prizesMap";
import VerticalProgressBar from "../components/VerticalProgressBar";
import axios from "axios";



function myRP() {
    const [userPoints, setUserPoints] = useState(0); // Initialize points to 0
    
    const [isSmall] = useMediaQuery("(max-width: 600px)");
    const [isShort] = useMediaQuery("(max-height: 735px)");

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");

        if (!jwt) {
            window.location.href = "/auth"
            return;
        }

        const jwt_decoded = jwtDecode(jwt);
		const isStaleJwt = Date.now() > (jwt_decoded["exp"]! * 1000);

		if (isStaleJwt) {
			localStorage.removeItem("jwt");
            window.location.href = "/auth"
            return;
		}

        const fetchUserPoints = async () => {
            try {
                const response = await axios.get('https://api.reflectionsprojections.org/attendee/points/', {
                    headers: {
                        Authorization: jwt
                    }
                });
                setUserPoints(response.data.points);
            } catch (error) {
                console.error("Error fetching points for user:", error);
                window.alert("You need to register before you can view your profile!")
                window.location.href="/register"
            }
        };

        fetchUserPoints(); // Fetch points when component mounts
    }); // Run effect when token changes

    return (
        <>
            <NavBar showAuth={true} />
            <Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 15px)" bgRepeat="no-repeat" minH="100vh" minW="100vw" pt='1vh' fontFamily='Kufam'>
                <Center minH='90vh'>
                    <VStack spacing={6} align="center">
                        <Flex align="center" justify="center">
                            <Text fontSize="2xl" color="white" mr={2}>
                                Your Points:
                            </Text>
                            <Image src="/pixel.png" boxSize="30px" mr={2} />
                            <Text fontSize="3xl" color="yellow.400">
                                {userPoints}
                            </Text>
                        </Flex>
                        <Text fontSize="lg" color="white" mb="10vh">
                            Attend events to earn points and unlock prizes!
                        </Text>
                        <Flex width="100%" justify="space-around">
                            <VStack spacing={4} marginRight={"30vw"}>
                                <Flex align="center">
                                    <PrizeSVG prizeNum={3} attendeePoints={userPoints} />
                                    <Image src="/pixel.png" boxSize="30px" mx={2} />
                                    <Text fontSize="lg" color="white">
                                        x50
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <PrizeSVG prizeNum={2} attendeePoints={userPoints}/>
                                    <Image src="/pixel.png" boxSize="30px" mx={2} />
                                    <Text fontSize="lg" color="white">
                                        x35
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <PrizeSVG prizeNum={1} attendeePoints={userPoints} />
                                    <Image src="/pixel.png" boxSize="30px" mx={2} />
                                    <Text fontSize="lg" color="white">
                                        x20
                                    </Text>
                                </Flex>
                            </VStack>
                            <VerticalProgressBar userPoints={userPoints} />
                        </Flex>
                    </VStack>
                </Center>
            </Box>
        </>
    );
};

export default myRP;