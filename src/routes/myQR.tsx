import { Box, Text, VStack } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
// import { getPoints } from "../api/getPoints";

import { Center, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { QRCodeSVG } from 'qrcode.react';
import { NavBar } from "../components/NavBar";
import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';

import FoodWave1 from "/myQR/foodwave1.svg";
import FoodWave2 from "/myQR/foodwave2.svg";
import Config from "../config";

function myQR() {
    const [isSmall] = useMediaQuery("(max-width: 600px)");
    const [isShort] = useMediaQuery("(max-height: 735px)");

    const [userJwt, setUserJwt] = useState<string | null>("");
    const [foodWave, setFoodWave] = useState(2);
    const [name, setName] = useState("");
    const [QR, setQR] = useState("");

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");

        if (!jwt) {
            setUserJwt(null);
            window.location.href = "/auth"
            return;
        }

        const jwt_decoded = jwtDecode(jwt);
        const isStaleJwt = Date.now() > (jwt_decoded["exp"]! * 1000);

        if (isStaleJwt) {
            setUserJwt(null);
            localStorage.removeItem("jwt");
            window.location.href = "/auth"
            return;
        }

        setUserJwt(jwt);
    });

    useEffect(() => {
        if (!userJwt) {
            return;
        }
        axios.get(Config.API_BASE_URL+'attendee/foodwave/', {
            headers: {
                Authorization: userJwt
            }
        }).then(r => { setFoodWave(r.data.foodwave) }).catch(() => {
            window.alert("You need to register before you can view your profile!")
            window.location.href="/register"
        })
    }, [userJwt]);

    useEffect(() => {
        if (!userJwt) {
            return;
        }
        axios.get(Config.API_BASE_URL+'attendee/', {
            headers: {
                Authorization: userJwt
            }
        }).then(r => { setName(r.data.name) })
    }, [userJwt]);

    useEffect(() => {
        axios.get(Config.API_BASE_URL+'attendee/qr/', {
            headers: {
                Authorization: userJwt
            }
        }).then(r => { setQR(r.data.qrCode) })

        setInterval(async () => {
            if (!userJwt) {
                return;
            }

            await axios.get(Config.API_BASE_URL+'attendee/qr/', {
                headers: {
                    Authorization: userJwt
                }
            }).then(r => { setQR(r.data.qrCode) })
        }, 18000 + Math.random() * 5000);
    }, [userJwt]);

    return (
        <>
            <NavBar showAuth={true} />
            <Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 15px)" bgRepeat="no-repeat" minH="100vh" minW="100vw" pt='1vh' fontFamily='Kufam'>
                <Center minH='90vh'>
                    <VStack p='10vw' pt="80px" color='white'>
                        <Text>{name} </Text>
                        <Box p="4" backdropBlur={3} bgColor="rgba(255, 255, 255, 0.4)">
                            <QRCodeSVG value={QR} size={isSmall ? 196 : 256} bgColor="transparent" />
                        </Box>
                        <Box
                            w="300px"
                            p="4"
                            bgImage={`url(${foodWave == 1 ? FoodWave1 : FoodWave2})`}
                            bgSize="contain" // Fits the image within the box while preserving aspect ratio
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            alignItems="center"
                        >
                            <Center color={"black"} fontFamily={"kufam"} fontWeight={"700"} fontSize={"2em"}> Food Wave: {foodWave} </Center>
                        </Box>

                    </VStack>
                </Center>
            </Box >
        </>
    );
};

export default myQR;