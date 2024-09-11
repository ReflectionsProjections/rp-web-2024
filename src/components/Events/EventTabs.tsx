import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import axios from 'axios';

import EventCard from './EventCard';
import EventTab from './EventTab';

enum EventType {
	SPEAKER = "SPEAKER",
	CORPORATE = "CORPORATE",
	SPECIAL = "SPECIAL",
	PARTNERS = "PARTNERS",
	MEALS = "MEALS",
}

interface Event {
  eventId: string;
  name: string;
  startTime: string;
  endTime: string;
  points: number;
  description: string;
  isVirtual: boolean;
  imageUrl?: string | null;
  location?: string | null;
  eventType: EventType;
}

const startDate = new Date('2024-09-18'); // September 18 (Wednesday)
const endDate = new Date('2024-09-23'); // September 22 (Sunday) -- not sure why this only works if I set endDate to 9/23/2024

// Function to check if an event falls within the date range
const isWithinDateRange = (date: Date): boolean => {
	return date >= startDate && date <= endDate;
};

// Function to get the day of the week (e.g., "Wed", "Thu") from a Date object
const getDayOfWeek = (date: Date): string => {
	return date.toLocaleDateString('en-US', { weekday: 'short' });
};

// Fetch events from the API
const fetchEvents = async (): Promise<Event[]> => {
	try {
		const response = await axios.get<Event[]>('https://api.reflectionsprojections.org/events');
		return response.data;
	} catch (error) {
		console.error("Failed to fetch events:", error);
		return [];
	}
};

export const EventTabs = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getEvents = async () => {
			const fetchedEvents = await fetchEvents();
			setEvents(fetchedEvents);
			setLoading(false);
		};
		getEvents();
	}, []);

	// Filter events by the specific day and within the date range
	const filterEventsByDay = (day: string) => {
		return events.filter(event => {
			const eventDate = new Date(event.startTime);
			return isWithinDateRange(eventDate) && getDayOfWeek(eventDate) === day;
		});
	};

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
				{['Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
					<TabPanel key={day}>
						<Flex flexDirection="column" alignItems="center" height="100%" width="100%">
							{loading ? (
								<p>Loading events...</p>
							) : (
								filterEventsByDay(day).map(event => {
									const eventStartTime = new Date(event.startTime);
									const eventEndTime = new Date(event.endTime);
									const cstStartTime = new Date(eventStartTime.getTime() + (5 * 60 * 60 * 1000));
									const cstEndTime = new Date(eventEndTime.getTime() + (5 * 60 * 60 * 1000));

									return (
									  <EventCard
											key={event.eventId}
											title={event.name}
											location={event.location ?? 'Virtual'}
											startTime={cstStartTime.toLocaleTimeString('en-US', { 
										  hour: '2-digit', 
										  minute: '2-digit'
											})}
											endTime={cstEndTime.toLocaleTimeString('en-US', { 
												hour: '2-digit', 
												minute: '2-digit'
												  })}
											description={event.description}
									  />
									);
								  })
								  
							)}
						</Flex>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
};
export default EventTabs;
