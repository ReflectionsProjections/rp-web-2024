// NavBar.tsx
import { HStack, Image} from '@chakra-ui/react';

export function NavBar() {
	return (
		<HStack justify="space-between" width="100%" position='absolute' backgroundColor='#00456D' borderBottom='solid 3px #003B5C'>
			<Image onClick={() => window.location.href = '/'} src="/rp_logo.svg" alt="R|P LOGO alt" height="auto" maxW="58px" padding="0.5rem" cursor={"pointer"} transition={'ease-in 0.2s'} _hover={{ transform: 'scale(1.2)' }}/>
			{/* <Tabs align = 'end' variant = "unstyled" color = "white">
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
			</Tabs> */}
		</HStack>
	);
}
