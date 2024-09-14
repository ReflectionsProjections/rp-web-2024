import React, { useState } from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import CardBg from "../../assets/events_assets/event_card.svg";
import CardHead from "../../assets/events_assets/event_card_head.svg";
import CardHead1 from "../../assets/speaker_assets/speaker_card_head.svg";
import CardBg1 from "../../assets/speaker_assets/speaker_card.svg";
import { ChevronDownIcon } from '@chakra-ui/icons';

interface SpeakerCardProps {
  name: string;
  company: string;
  role: string;
  description: string;
  speakerImg: string;
}

const EventCard: React.FC<SpeakerCardProps> = ({ name, company, role, description, speakerImg }) => {
	const [isExtended, setIsExtended] = useState(false);

	const toggleCard = () => {
		setIsExtended(!isExtended);
	};
	const isPeiCao = name === "Pei Cao";
	const cardBg = isPeiCao ? CardBg1 : CardBg;
	const cardHead = isPeiCao ? CardHead1 : CardHead;
	return (
		<Box
			maxWidth="900px"
			width="96vw"
			minHeight={isExtended ? "300px" : "150px"}
			marginY='10px'
			marginX='2vw'
			backgroundImage={`url(${cardBg})`}
			bgSize="100% 100%"
			backgroundPosition="center"
			backgroundRepeat="repeat"
			cursor="pointer"
			onClick={toggleCard}
			transition="min-height 0.2s linear"
			position="relative"
		>
			<Box 
				marginTop='15px'
				marginLeft='4%'
				minHeight='30px'
				width='92%'
				backgroundImage={`url(${cardHead})`}
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
				<Flex 
					width="100%" 
					alignItems="center"
					justifyContent="flex-start" 
				>
					<Image 
						src={speakerImg} 
						alt="Profile Image" 
						height="80px" 
						width="80px" 
						objectFit="cover" 
						borderRadius="50%" 
						mr="20px" 
					/>
					<Flex 
						flexDirection="column" 
						alignItems="flex-start"
					>
						<Text
							mr={8}
							fontSize="xl"
							color="#0A0F7E" 
							fontFamily='Kufam' 
							fontWeight="800" 
							fontStyle="italic" 
							mt="1%" 
							textAlign="left" 
						>
							{name}
						</Text>
						<Text
							mr={4}
							fontSize="md" 
							color="black" 
							fontFamily='Kufam' 
							textAlign="left" 
						>
							{company}
						</Text>
						<Text
							mr={4}
							mb={4}
							fontSize="md" 
							color="black" 
							fontFamily='Kufam' 
							textAlign="left" 
						>
							{role}
						</Text>
					</Flex>
				</Flex>
				{isExtended && (
					<Text 
						fontSize="md" 
						color="black" 
						textAlign="left" 
						mr="5%" 
						mb="7%"
					>
						{description}
					</Text>
				)}
			</Flex>
			<ChevronDownIcon 
				width='30px' 
				height='30px' 
				transform={`rotate(${isExtended ? 180 : 0 }deg)`} 
				position="absolute"
				top="45px" 
				right="20px" 
				borderRadius='50%' 
				color='black' 
				transition='all 0.3s' 
			/>
		</Box>
	);
};

export default EventCard;


