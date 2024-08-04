import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/pages/AttendeeInformation';
import CareerProfile from '../components/Registration/pages/CareerProfile';

export interface PageProps {
	pageNo: number;
	goNextPage: () => void;
	goPrevPage: () => void;
	setAttendeeData: React.Dispatch<React.SetStateAction<object>>;
	attendeeData: object;
}

export default function Registration() {
	const [pageNo, setPageNo] = useState(0);
	const [attendeeData, setAttendeeData] = useState<object>({});

	function goNextPage() {
		setPageNo(pageNo + 1);
	}

	function goPrevPage() {
		setPageNo(pageNo - 1);
	}

	const props: PageProps = {
		pageNo: pageNo,
		goNextPage: goNextPage,
		goPrevPage: goPrevPage, 
		setAttendeeData: setAttendeeData,
		attendeeData: attendeeData,
	}

	function getPage() {
		switch (pageNo) {
		case 0: return <AttendeeInformation {...props}/>;
		case 1: return <CareerProfile {...props}/>;
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
