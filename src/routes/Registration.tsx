import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/pages/AttendeeInformation';

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
		case 0: return <AttendeeInformation pageNo={pageNo} goNextPage={goNextPage} goPrevPage={goPrevPage}/>;
		case 1: return <AttendeeInformation pageNo={pageNo} goNextPage={goNextPage} goPrevPage={goPrevPage}/>;
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
