import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Question1 from "/myRP/blue-question.svg";
import Question2 from "/myRP/purple-question.svg";
import Question3 from "/myRP/pink-question.svg";
import Button from "/myRP/button.svg";
import ToteBag from "/myRP/tote-bag.svg";
import Cap from "/myRP/cap.svg";

interface PrizeSVGProps {
    prizeNum: number;
    attendeePoints: number;
}

const PrizeSVG: React.FC<PrizeSVGProps> = ({
    prizeNum,
    attendeePoints,
}) => {
    const size = 100;

    const getBackgroundImage = () => {
        // Map SVG backgrounds based on prizeNum and attendeePoints
        const svgMap: { [key: number]: string } = {
            1: attendeePoints >= 20 ? Button : Question1,
            2: attendeePoints >= 35 ? ToteBag : Question2,
            3: attendeePoints >= 50 ? Cap : Question3,
        };
        console.log(attendeePoints, svgMap[prizeNum])
        return svgMap[prizeNum] || "";
    };

    const backgroundImage = getBackgroundImage();

    return backgroundImage ? (
        <Box
            width={`${size}px`}
            height={`${size}px`}
            bg={`url(${backgroundImage})`}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
        />
    ) : (
        <Text>No SVG available</Text>
    );
};

export default PrizeSVG;
