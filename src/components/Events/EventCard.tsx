import React, { useState } from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import CardBg from "../../assets/events_assets/event_card.svg";
import CardHead from "../../assets/events_assets/event_card_head.svg";
import ExtendedCardBg from "../../assets/events_assets/event_card_extended.svg";

interface EventCardProps {
  title: string;
  location: string;
  time: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, time, description }) => {
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
				<Text fontSize="md" color="black" mb={isExtended ? "2%" : "4%"}>{time}</Text>
        
				{isExtended && (
					<Text fontSize="md" color="black" textAlign="left">{description}</Text>
				)}
			</Flex>
		</Box>
	);
};

export default EventCard;
