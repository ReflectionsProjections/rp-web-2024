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
      height="20vh"
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
        ml="4%">
        <Text fontSize="xl" fontWeight="bold" color="black" mb="1%">{title}</Text>
        <Text fontSize="md" color="black">{location}</Text>
        <Text fontSize="md" color="black">{time}</Text>
      </Flex>
    </Box>
  );
};

export default EventCard;
