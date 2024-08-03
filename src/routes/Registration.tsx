import { Box, Button, Center, Flex, IconButton, SimpleGrid, Spacer, VStack } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/pages/AttendeeInformation';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';

const NUM_PAGES = 4;

export default function Registration() {
	const [pageNo, setPageNo] = useState(0);

	function goNextPage() {
		setPageNo(pageNo + 1);
	}


	function goPrevPage() {
		setPageNo(pageNo - 1);
	}

	function getPage() {
		switch (pageNo) {
			case 0: return <AttendeeInformation />
			case 1: return <></>
			case 2: return <></>
			case 3: return <></>
		}
	}

	return (
		<VStack spacing={0}>
			<NavBar />

			<Flex direction="column" w="100%" align={"center center"} mt="10vh">
				<Box bg="white" p={6} rounded="md" h="80vh" >
					{getPage()}
				</Box>
			</Flex>

			<Flex width="full" padding="10px">
				<Center> <Button m="10px" variant="solid" minWidth="120px" maxWidth="160px"> Save </Button> </Center>
				<Spacer />
				<Center> 
					<IconButton m="10px" isDisabled={pageNo == 0} onClick={goPrevPage} aria-label='Back' height="5vh" width="5vh" icon={<ChevronLeftIcon />} />
					<IconButton m="10px" isDisabled={pageNo == NUM_PAGES-1} onClick={goNextPage} aria-label='Next' height="5vh" width="5vh" icon={<ChevronRightIcon />} />
					</Center>
			</Flex>
		</VStack>

	);
}
