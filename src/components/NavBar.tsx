// NavBar.tsx
import { Avatar, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';

interface NavBarProps {
    showAuth?: boolean;
}

export function NavBar({showAuth=false}: NavBarProps) {
	const signOut = () => {
		localStorage.removeItem("jwt");
		window.location.href = "/";
	};
	
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

			{showAuth && (
				<Menu>
					<MenuButton
						as={Button}
						rounded={'full'}
						variant={'link'}
						cursor={'pointer'}
						minW={0}
						mr={2}>
						<Avatar bg='blue.900' size={'sm'} />
					</MenuButton>
					<MenuList>
						<MenuItem onClick={signOut}>Sign Out</MenuItem>
					</MenuList>
				</Menu>
			)}
		</HStack>
	);
}
