import { Box, Flex } from '@chakra-ui/react';
import '@fontsource/kufam';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/nunito';
import PageTitle from "../components/Home/PageTitle";
import { NavBar } from '../components/NavBar';
import { SpeakerTabs } from "../components/Speakers/SpeakerTabs";

import BackgroundPattern from "../assets/events_assets/event_background.svg";

export function Speakers() {
	return (
		<Box
			position="relative"
			minHeight="100vh"
			bg="#16446a"
			bgImage={`url(${BackgroundPattern})`}
			bgSize="100% auto"
			bgRepeat="no-repeat"
			bgPosition="top"
			bgAttachment="scroll"
		>
			<NavBar />

			<Flex direction="column" position="relative">
				<PageTitle title="SPEAKERS" />

				<SpeakerTabs />
			</Flex>
		</Box>
	);
}

export default Speakers;