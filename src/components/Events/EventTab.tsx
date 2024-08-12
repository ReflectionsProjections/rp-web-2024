import React from 'react';
import { Tab, useMediaQuery } from "@chakra-ui/react";
import UnselectedTabBg from "../../assets/events_assets/date_unselected.svg";
import SelectedTabBg from "../../assets/events_assets/date_selected.svg";

interface EventTabProps {
  day: string;
}

const EventTab: React.FC<EventTabProps> = ({ day }) => {
	const [isSmall] = useMediaQuery("(max-width: 800px)");

	return (
		<Tab 
			bgImage={UnselectedTabBg}
			backgroundPosition="center" 
			backgroundRepeat="no-repeat" 
			fontWeight='bold'
			fontSize={isSmall ? "3vw" : "20px"}
			padding={isSmall ? "8vw" : "20px"}
      margin="5px"
			bgSize="100% 100%"
			width={isSmall ? "7vw" : "100px"}
			_selected={{ bgImage: SelectedTabBg }}>
			{day}
		</Tab>
	);
};

export default EventTab;
