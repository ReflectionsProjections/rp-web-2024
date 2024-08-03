import { VStack } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import AttendeeInformation from '../components/Registration/pages/AttendeeInformation';

export default function Registration() {
	return (
		<VStack spacing={0}>
			<NavBar />
			<AttendeeInformation />
		</VStack>
		
	);
}
