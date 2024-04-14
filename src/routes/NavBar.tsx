// NavBar.tsx
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export function NavBar() {
  return (
    <Tabs align = 'end' variant = "unstyled">
      <TabList>
        <Tab>About Us</Tab>
        <Tab>PuzzleBang</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        </TabPanel>
        <TabPanel>
         
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
