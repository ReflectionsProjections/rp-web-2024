import { Box, VStack, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/Pages/AttendeeInformation';
import Education from '../components/Registration/Pages/Education';
import Diversity from "../components/Registration/Pages/Diversity";
import Engagement from '../components/Registration/Pages/Engagement';

import BlueSands from '/Registration/blue_desert.svg';
import MobileBG from '/Registration/mobile_bg.svg';
import Career from '../components/Registration/Pages/Career';

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
	const [isSmall] = useMediaQuery("(max-width: 600px)");
	const [isShort] = useMediaQuery("(max-height: 735px)");
	const [pageNo, setPageNo] = useState(4);
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
		case 1: return <Education {...props}/>;
		case 2: return <Career {...props} />
		case 3: return <Diversity {...props}/>;
		case 4: return <Engagement {...props}/>;
		}
	}

	return (
		<VStack spacing={0}>
			<NavBar />
			<Box bgImage={isSmall ? MobileBG : isShort ? MobileBG : BlueSands} bgSize="115% 105%" bgPosition="center calc(100% + 55px)" bgRepeat="no-repeat" minH="100vh" minW="100vw">
				{getPage()}
			</Box>
		</VStack>

	);
}
