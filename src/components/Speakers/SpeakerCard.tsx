import React, { useState } from 'react';
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import CardBg from "../../assets/events_assets/event_card.svg";
import CardHead from "../../assets/events_assets/event_card_head.svg";
// import ExtendedCardBg from "../../assets/events_assets/event_card_extended.svg";
import { ChevronDownIcon } from '@chakra-ui/icons';

interface SpeakerCardProps {
  title: string;
  location: string;
  time: string;
  description: string;
}

const EventCard: React.FC<SpeakerCardProps> = ({ title, location, time, description }) => {
	const [isExtended, setIsExtended] = useState(false);

	const toggleCard = () => {
		setIsExtended(!isExtended);
	};

	return (
		<Box
			maxWidth="900px"
			width="96vw"
			minHeight={isExtended ? "300px" : "150px"}
			// paddingTop={isExtended ? "35px" : "35px"}
			
			marginY='10px'
			marginX='2vw'
			backgroundImage={`url(${CardBg})`}
			bgSize="100% 100%"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			cursor="pointer"
			onClick={toggleCard}
			transition="min-height 0.2s linear" // Smooth transition for all properties
		>
			<Box 
				marginTop='15px'
				marginLeft='4%'
				minHeight='30px'
				width='92%'
				backgroundImage={`url(${CardHead})`}
				bgSize="100% 100%"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"/>
			<Flex 
				flexDirection="column" 
				alignItems="flex-start"
				height="100%" 
				width="100%"
				paddingLeft='4%'
			>
				<Text 
					fontSize="xl" 
					color="#0A0F7E" 
					fontFamily='Kufam' 
					fontWeight="800" 
					fontStyle="italic" 
					mr="3%" 
					mt="1%" 
					textAlign="left"
				>
					{title}
				</Text>
				<Text fontSize="md" color="black">{location}</Text>
				<HStack width='88vw' maxWidth="835px" mb={isExtended ? "2%" : "4%"}>
					<Text fontSize="md" color="black">{time}</Text>
					<ChevronDownIcon width='30px' height='30px' transform={`translateY(-10px) rotate(${isExtended ? 180 : 0 }deg)`} ml={'auto'} borderRadius='50%' color='black' transition='all 0.3s' />
				</HStack>
          
        
				{isExtended && (
					<Text fontSize="md" color="black" textAlign="left">{description}</Text>
				)}
			</Flex>
		</Box>
	);
};

export default EventCard;