// NavBar.tsx
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Image} from '@chakra-ui/react';
import { logoStyle } from "../customTheme";

export function NavBar() {
	return (
		<HStack justify="space-between" width="100%" padding="1rem" style={logoStyle}>
			<Image src="logo.png" alt="R|P LOGO alt" height="auto" maxW="79px" /> {/* Responsive logo */}
			<Tabs align = 'end' variant = "unstyled" color = "white">
				<TabList>
					<Tab>About Us</Tab>
					<Tab>Speakers</Tab>
					<Tab>PuzzleBang</Tab>
					<Tab>Mechmania</Tab>
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
		</HStack>
	);
}
