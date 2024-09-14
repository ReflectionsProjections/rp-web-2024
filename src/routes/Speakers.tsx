import { Box, Flex } from '@chakra-ui/react';
import '@fontsource/kufam';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/nunito';
import PageTitle from "../components/Home/PageTitle";
import { NavBar } from '../components/NavBar';
import { SpeakerList } from "../components/Speakers/SpeakerList";

import BackgroundPattern from "/Events/event_background.svg";

export function Speakers() {
	return (
		<Box
			position="relative"
			minHeight="100vh"
			bg="#16446a"
			bgImage={`url(${BackgroundPattern})`}
			bgSize="100% auto"
			bgRepeat="repeat"
			bgPosition="top"
			bgAttachment="scroll"
		>
			<NavBar />

			<Flex direction="column" position="relative">
				<PageTitle title="SPEAKERS" />

				<SpeakerList />
			</Flex>
		</Box>
	);
}

export default Speakers;