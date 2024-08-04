import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/Pages/AttendeeInformation';
import Career from '../components/Registration/Pages/Career';
import Diversity from "../components/Registration/Pages/Diversity";
import Engagement from '../components/Registration/Pages/Engagement';

export interface PageProps {
	pageNo: number;
	goNextPage: () => void;
	goPrevPage: () => void;
	setAttendeeData: React.Dispatch<React.SetStateAction<object>>;
	attendeeData: object;
}

export interface FormikValues {
    [key: string]: unknown;
}

export default function Registration() {
	const [pageNo, setPageNo] = useState(3);
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
	};

	function getPage() {
		switch (pageNo) {
		case 0: return <AttendeeInformation {...props}/>;
		case 1: return <Career {...props}/>;
		case 2: return <Diversity {...props}/>;
		case 3: return <Engagement {...props}/>;
		}
	}

	return (
		<VStack spacing={0}>
			<NavBar />
			{getPage()}
		</VStack>

	);
}
