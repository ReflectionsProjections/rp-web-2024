import { useState } from "react"
import { Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, VStack } from "@chakra-ui/react"

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
          <TabPanel>
              <EventCard/> 
              <EventCard/>
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