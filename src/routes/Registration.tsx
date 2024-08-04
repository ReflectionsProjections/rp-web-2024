import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/pages/AttendeeInformation';
import CareerProfile from '../components/Registration/pages/CareerProfile';

export default function Registration() {
	const [pageNo, setPageNo] = useState(1);

	function goNextPage() {
		setPageNo(pageNo + 1);
	}

	function goPrevPage() {
		setPageNo(pageNo - 1);
	}

	function getPage() {
		switch (pageNo) {
		case 0: return <AttendeeInformation pageNo={pageNo} goNextPage={goNextPage} goPrevPage={goPrevPage}/>;
		case 1: return <CareerProfile pageNo={pageNo} goNextPage={goNextPage} goPrevPage={goPrevPage}/>;
		case 2: return <></>;
		case 3: return <></>;
		}
	}

	return (
		<VStack spacing={0}>
			<NavBar />
			{getPage()}
		</VStack>

	);
}
