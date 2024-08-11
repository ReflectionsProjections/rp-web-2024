import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, Tab, Flex } from "@chakra-ui/react";
import EventCard from './EventCard'; // Assuming EventCard component is already created
import axios from 'axios';
import { z } from 'zod';
// import { publicEventValidator } from './validators'; // Adjust the import path accordingly

// TypeScript type for Event
type Event = z.infer<typeof publicEventValidator>;

// Fetch events from the API
const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>('/api/events');
    // Validate the response using the Zod schema
    // return response.data.map(event => publicEventValidator.parse(event));
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
};

const EventsTabs = () => {
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

  // Filter events by date
  const filterEventsByDate = (date: string) => {
    return events.filter(event => {
      const eventDate = new Date(event.startTime).toLocaleDateString('en-US', { weekday: 'short' });
      return eventDate === date;
    });
  };

  return (
    <Tabs>
      <TabList>
        <Tab>WED</Tab>
        <Tab>THUR</Tab>
        <Tab>FRI</Tab>
        <Tab>SAT</Tab>
        <Tab>SUN</Tab>
      </TabList>

      <TabPanels>
        {['Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <TabPanel key={day}>
            <Flex flexDirection="column" alignItems="center" height="100%" width="100%">
              {loading ? (
                <p>Loading events...</p>
              ) : (
                filterEventsByDate(day).map(event => (
                  <EventCard
                    key={event.eventId}
                    title={event.name}
                    location={event.location ?? 'Virtual'}
                    time={new Date(event.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
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

export default EventsTabs;
