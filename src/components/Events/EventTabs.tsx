import { Flex, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import EventCard from "./EventCard";
import EventTab from "./EventTab";

export function EventTabs() {
	return (
		<Tabs variant='unstyled'>
			<Flex 
				flexDirection="column"
				alignItems="center"
				textColor='black'
				height="100%" 
				width="100%">

				<TabList>
					<EventTab day="WED"/>
					<EventTab day="THUR"/>
					<EventTab day="FRI"/>
					<EventTab day="SAT"/>
					<EventTab day="SUN"/>
				</TabList>

			</Flex>

			<TabPanels>
				<TabPanel alignItems="center">
					<Flex 
						flexDirection="column"
						alignItems="center"
						height="100%" 
						width="100%">

						{/* Sample cards here—we need to call the GET events API endpoint in these panels. */}
						<EventCard title="Event Title" location="New York, NY" time="10:00 AM" />
						<EventCard title="Event Title" location="New York, NY" time="10:00 AM" />
						<EventCard title="Event Title" location="New York, NY" time="10:00 AM" />
            
					</Flex>
          
				</TabPanel>
				<TabPanel>Thursday Content</TabPanel>
				<TabPanel>Friday Content</TabPanel>
				<TabPanel>Saturday Content</TabPanel>
				<TabPanel>Sunday Content</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
export default EventTabs;