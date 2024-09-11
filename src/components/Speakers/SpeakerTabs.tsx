import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import axios from 'axios';

import SpeakerCard from './SpeakerCard';
import SpeakerTab from './SpeakerTab';

enum EventType {
  A = 'A',
  B = 'B',
  C = 'C'
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
const endDate = new Date('2024-09-22'); // September 22 (Sunday)

// Function to check if an event falls within the date range
const isWithinDateRange = (date: Date): boolean => {
	return date >= startDate && date <= endDate;
};

// Function to get the day of the week (e.g., "Wed", "Thu") from a Date object
const getDayOfWeek = (date: Date): string => {
	return date.toLocaleDateString('en-US', { weekday: 'short' });
};

// Fetch events from the API
const fetchSpeakers = async (): Promise<Event[]> => {
	try {
		const response = await axios.get<Event[]>('https://api.reflectionsprojections.org/speakers');
		return response.data;
	} catch (error) {
		console.error("Failed to fetch speakers:", error);
		return [];
	}
};

export const SpeakerTabs = () => {
	const [speakers, setSpeakers] = useState<Event[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getEvents = async () => {
			const fetchedEvents = await fetchSpeakers();
			setSpeakers(fetchedEvents);
			setLoading(false);
		};
		getEvents();
	}, []);

	// Filter events by the specific day and within the date range
	const filterEventsByDay = (day: string) => {
		return speakers.filter(speakers => {
			const speakerDate = new Date(speakers.startTime);
			return isWithinDateRange(speakerDate) && getDayOfWeek(speakerDate) === day;
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
					<SpeakerTab day="WED"/>
					<SpeakerTab day="THUR"/>
					<SpeakerTab day="FRI"/>
					<SpeakerTab day="SAT"/>
					<SpeakerTab day="SUN"/>
				</TabList>

			</Flex>

			<TabPanels>
				{['Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
					<TabPanel key={day}>
						<Flex flexDirection="column" alignItems="center" height="100%" width="100%">
							{loading ? (
								<p>Loading speakers...</p>
							) : (
								filterEventsByDay(day).map(speakers => (
									<SpeakerCard
										key={speakers.eventId}
										title={speakers.name}
										location={speakers.location ?? 'Virtual'}
										time={new Date(speakers.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
										description={speakers.description}
									/>
								))
							)}
						</Flex>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
};
export default SpeakerTabs;