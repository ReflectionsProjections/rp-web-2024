import React, { useState } from 'react';
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import CardBg from "/Events/event_card.svg";
import CardHead from "/Events/event_card_head.svg";
import { ChevronDownIcon } from '@chakra-ui/icons';

interface EventCardProps {
  title: string;
  location: string;
  startTime: string;
  endTime: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, startTime, endTime, description }) => {
	const [isExtended, setIsExtended] = useState(false);

	const toggleCard = () => {
		setIsExtended(!isExtended);
	};

	const displayLocation = (location: string) => {
		const regex = /{(.*?)}/; // Regular expression to capture the content inside {{ }}
		const match = location.match(regex);
        
		if (match && match[1]) {
			// If there is a match, create and insert a hyperlink
			return <Link href="${match[1]}">{match[1]} </Link>;
		} else {
			// If there is no match, insert plain text
			return <>{location}</>;
		}
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
				<Text fontSize="md" color="black" fontFamily='Kufam'>{displayLocation(location)}</Text>
				<HStack width='88vw' maxWidth="835px" mb={isExtended ? "2%" : "4%"}>
					<Text fontSize="md" color="black" fontFamily='Kufam'>{startTime}-{endTime}</Text>
					<ChevronDownIcon width='30px' height='30px' transform={`translateY(-10px) rotate(${isExtended ? 180 : 0 }deg)`} ml={'auto'} borderRadius='50%' color='black' transition='all 0.3s' />
				</HStack>
          
        
				{isExtended && (
					<Text fontSize="md" color="black" textAlign="left" mr="5%" mb="7%">{description}</Text>
				)}
			</Flex>
		</Box>
	);
};

export default EventCard;