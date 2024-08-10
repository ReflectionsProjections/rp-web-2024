import { useState } from "react"
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, VStack } from "@chakra-ui/react"

import EventCard from "./EventCard";

export function EventTabs() {
    return (
      <Tabs>
        <TabList>
          <Tab>WED</Tab>
          <Tab>THUR</Tab>
          <Tab>FRI</Tab>
          <Tab>SAT</Tab>
          <Tab>SUN</Tab>
        </TabList>
        <TabPanels p='2rem'>
          <TabPanel alignItems="center">
            <Flex 
              flexDirection="column"
              alignItems="center"
              height="100%" 
              width="100%">

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
    )
  }
export default EventTabs;