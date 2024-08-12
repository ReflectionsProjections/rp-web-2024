import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import CardBg from "../../assets/events_assets/event_card.svg";

interface EventCardProps {
  title: string;
  location: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, time }) => {
	return (
		<Box
			maxWidth="900px"
			width="100vw"
			minHeight="150px"
			paddingTop='35px'
			paddingLeft='4%'
			marginY='10px'
			backgroundImage={`url(${CardBg})`}
			bgSize="100% 100%"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
		>
			<Flex 
				flexDirection="column" 
				alignItems="flex-start" 
				justifyContent="center" 
				height="100%" 
				width="100%"
			>
				<Text fontSize="xl" color="#0A0F7E" fontFamily='Kufam' fontWeight="800" fontStyle="italic" mb="1%">{title}</Text>
				<Text fontSize="md" color="black">{location}</Text>
				<Text fontSize="md" color="black">{time}</Text>
			</Flex>
		</Box>
	);
};

export default EventCard;
