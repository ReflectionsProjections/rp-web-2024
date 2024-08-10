import React from 'react';
import { Tab } from "@chakra-ui/react";
import UnselectedTabBg from "../../assets/events_assets/date_unselected.svg";
import SelectedTabBg from "../../assets/events_assets/date_selected.svg";

interface EventTabProps {
  day: string;
}

const EventTab: React.FC<EventTabProps> = ({ day }) => {
  return (
      <Tab 
          bgImage={UnselectedTabBg}
          backgroundPosition="center" 
          backgroundRepeat="no-repeat" 
          bgSize="100% 100%"
          width="7vw"
          _selected={{ bgImage: SelectedTabBg }}>
            {day}
        </Tab>
  );
};

export default EventTab;
