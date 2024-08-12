import React, { useState } from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";
import CardBg from "../../assets/events_assets/event_card.svg";
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
      width="100vw"
      minHeight={isExtended ? "300px" : "150px"}
      paddingTop={isExtended ? "60px" : "35px"}
      paddingLeft='4%'
      marginY='10px'
      backgroundImage={`url(${isExtended ? ExtendedCardBg : CardBg})`}
      bgSize="100% 100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      cursor="pointer"
      onClick={toggleCard}
      transition="height 0.2s linear, padding 0.2s linear" // Smooth transition for all properties
    >
      <Flex 
        flexDirection="column" 
        alignItems="flex-start"
        height="100%" 
        width="100%"
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
          <Text fontSize="md" color="black">{description}</Text>
        )}
      </Flex>
    </Box>
  );
};

export default EventCard;
